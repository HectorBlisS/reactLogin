/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {ProductCard} from "./ProductCard";
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


export const ProductListDisplay = ({products}) => {
    return (
        <section>
            <h2>Lista de Productos:</h2>
            <article className="product-container" >
                {products.map((p, index)=><ProductCard key={index} {...p}/>)}
            </article>

            <FloatingActionButton>
                <ContentAdd/>
            </FloatingActionButton>

        </section>
    );
};

//ProductListDisplay.propTypes = {};

const styles = {
    name: {}
};

