import React, {Component} from 'react';
import {ProductDetailDisplay} from './ProductDetailDisplay';
import {getProductById, updateProductById} from '../../../api/google';
//import {getProductById} from '../../../api/php';

import toastr from 'toastr';
import {ProductForm} from './ProductForm';

class ProductDetail extends Component{

	state = {
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

    onSave = (e) => {
    	e.preventDefault();
    	this.setState({openForm:false});
    	const id = this.props.match.params.id;
    	updateProductById(id, this.state.product)
    	.then(()=>toastr.success("Tu producto se actualizo"));
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
