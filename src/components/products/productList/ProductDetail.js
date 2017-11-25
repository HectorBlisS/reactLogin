import React, {Component} from 'react';
import {ProductDetailDisplay} from './ProductDetailDisplay';
import {getProductById, updateProductById} from '../../../api/google';
//import {getProductById} from '../../../api/php';
import firebase from '../../../firebase';
import toastr from 'toastr';
import {ProductForm} from './ProductForm';

class ProductDetail extends Component{

	state = {
		file:null,
		product:{},
		openForm:false,
		errors:{}

	}

	onClose = () => {
		this.setState({openForm:false})
	};

	onOpen = () => {
		this.setState({openForm:true});
	};
	onChangeForm = (e) => {
        let product = this.state.product;
        const field = e.target.name;
        const value = e.target.value;
        product[field] = value;
        this.setState({product});
        //console.log(newProduct);
    };

    onChangeFile = (e) => {
    	const file = e.target.files[0];
    	this.setState({file});
    };

    onSave = (e) => {
    	e.preventDefault();
    	this.setState({openForm:false});
    	const id = this.props.match.params.id;
    	let product = this.state.product;
    	//subimos imagen
    	if(this.state.file){
    		firebase.storage()
    			.ref(id)
    			.child(this.state.file.name)
    			.put(this.state.file)
    			.then(s=>{
    				const link = s.downloadURL;
    				console.log(link);
    				product["photos"] = [link];
    				//actualizamos db
    				updateProductById(id, product)
    					.then(()=>toastr.success("Tu producto se actualizo"));
    				this.setState({product});
    			})
    	}
    	//submimos imagen
    	
    };

	componentWillMount(){
		const id = this.props.match.params.id;
		getProductById(id)
			.then(product=>{
				this.setState({product});
			})
			.catch(e=>toastr.error(e.message));

	}

	render(){
		const {product, errors, openForm} = this.state;
		return(
				<div>
					<ProductDetailDisplay
						onOpen={this.onOpen}
						{...product}

					/>
					<ProductForm
						onChangeFile={this.onChangeFile}
						{...product}
                		openForm={openForm}
                		onClose={this.onClose}
                		onSave={this.onSave}
                		onChangeForm={this.onChangeForm}
                		errors={errors}
            		/>
				</div>
			);
	}
}

export default ProductDetail;
