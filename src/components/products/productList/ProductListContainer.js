import React, {Component} from 'react';
import {ProductListDisplay} from './ProductListDisplay';
import firebase from '../../../firebase';
import toastr from 'toastr';

class ProductListContainer extends Component{

    state = {
        errors:{},
        newProduct:{},
        openForm:false,
        products:[
            {
                id:0,
                name:"Bicicleta",
                desc:"muy rosa",
                price:1200,
                photos:[
                    "link",
                    "link2"
                ]
            },
            {
                id:1,
                name:"Computadora",
                desc:"vaio",
                price:12000,
                photos:[
                    "link",
                    "link2"
                ]
            }
        ]
    };

    componentWillMount(){
        let products = this.state.products;
        firebase.database().ref("products")
          .on("child_added", snap=>{
              let nino = snap.val();
              nino["photos"] = ["link"];
              nino["id"] = snap.key;
              products.push(nino);
              this.setState({products});
          });

        firebase.database().ref("products")
            .on("child_removed", snap=>{
               let id = snap.key;
               products = products.filter(p=>p.id !== id);
               this.setState({products});
            });

    };

    remove = (id) => {
        if(window.confirm("Estas seguro de esto?")){
            firebase.database().ref("products")
                .child(id)
                .remove()
                .then(r=>toastr.warning("Se borro!"))
                .catch(e=>toastr.error("no se borró"));
        }

    };

    onClose = () => {
        this.setState({openForm:false});
    };

    onOpen = () => {
        this.setState({openForm:true});
    };

    onChangeForm = (e) => {
        let newProduct = this.state.newProduct;
        const field = e.target.name;
        const value = e.target.value;
        newProduct[field] = value;
        this.setState({newProduct});
        console.log(newProduct);
    };

    validateForm = () => {
        let newProduct = this.state.newProduct;
        let errors = this.state.errors;
        let isOk = true;
        if (newProduct.desc.length > 30) {
            errors["desc"] = "Solo 30 caracteres";
            isOk = false;
        }
        if(isNaN(newProduct.price)){
            errors["price"] = "Escribe un numero"
            isOk = false;
        }
        this.setState({errors});
        return isOk;
    };

    onSave = (e) => {
        e.preventDefault();
        if(this.validateForm()){
            firebase.database().ref("products")
                .push(this.state.newProduct)
                .then(r=>{
                    toastr.success("Guardé tu producto");
                    this.setState({openForm:false});
                })
                .catch(e=>{
                    toastr.error("Error perro: ", e.message);
                });
        }else{
            alert("hay errores");
        }
    };

    render(){
        const {products, openForm, errors} = this.state;
        return(
            <ProductListDisplay
                products={products}
                openForm={openForm}
                onClose={this.onClose}
                onOpen={this.onOpen}
                onChangeForm={this.onChangeForm}
                errors={errors}
                onSave={this.onSave}
                remove={this.remove}
            />
        );
    }
}

export default ProductListContainer;
