import React from 'react';
import {Dialog, TextField} from 'material-ui';

export const ProductForm = ({openForm, onClose, onSave, onChangeForm, errors, name, desc, price}) => {
	return(

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
                        value={name}
                        floatingLabelText="Nombre del producto"
                        errorText={errors.name}
                    />
                    <TextField
                        onChange={onChangeForm}
                        required
                        name="desc"
                        value={desc}
                        floatingLabelText="Descripción"
                        errorText={errors.desc}
                    />
                    <TextField
                        onChange={onChangeForm}
                        required
                        name="price"
                        value={price}
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

		);
}