/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {ProductCard} from "./ProductCard";
import {FloatingActionButton, Dialog, TextField} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


export const ProductListDisplay = ({remove, onSave, errors, onChangeForm, onOpen, onClose, products, openForm}) => {
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

            <Dialog
                autoScrollBodyContent={true}
                open={openForm}
                onRequestClose={onClose}
            >
                <form onSubmit={onSave} action="">
                    <h3>Agregar Producto</h3>
                    <TextField
                        onChange={onChangeForm}
                        required
                        name="name"
                        floatingLabelText="Nombre del producto"
                        errorText={errors.name}
                    />
                    <TextField
                        onChange={onChangeForm}
                        required
                        name="desc"
                        floatingLabelText="Descripción"
                        errorText={errors.desc}
                    />
                    <TextField
                        onChange={onChangeForm}
                        required
                        name="price"
                        floatingLabelText="Precio"
                        errorText={errors.price}
                    />
                    <TextField
                        onChange={onChangeForm}
                        name="photo"
                        floatingLabelText="Foto"
                        errorText={errors.photo}
                    />
                        <input type="submit"/>
                </form>
            </Dialog>

        </section>
    );
};

//ProductListDisplay.propTypes = {};

const styles = {
    name: {}
};

