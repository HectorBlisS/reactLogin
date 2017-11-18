import React, {Component} from 'react';
import {ProductListDisplay} from './ProductListDisplay';

class ProductListContainer extends Component{

    state = {
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

    render(){
        const {products} = this.state;
        return(
            <ProductListDisplay
                products={products}
            />
        );
    }
}

export default ProductListContainer;
