/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {ProductCard} from "./ProductCard";
import {FloatingActionButton, Dialog, TextField} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {ProductForm} from './ProductForm';

export const ProductListDisplay = ({onChangeFile, remove, onSave, errors, onChangeForm, onOpen, onClose, products, openForm}) => {
    return (
        <section>
            <h2>Lista de Productos:</h2>
            <article className="product-container" >
                {products.map((p, index)=><ProductCard remove={remove} key={index} {...p}/>)}
            </article>

            <FloatingActionButton
                onClick={onOpen}
                style={{
                    position:"fixed",
                    bottom:40,
                    right:40
                }}
            >
                <ContentAdd/>
            </FloatingActionButton>

            <ProductForm
                onChangeFile={onChangeFile}
                openForm={openForm}
                onClose={onClose}
                onSave={onSave}
                onChangeForm={onChangeForm}
                errors={errors}
            />

        </section>
    );
};

//ProductListDisplay.propTypes = {};

const styles = {
    name: {}
};

