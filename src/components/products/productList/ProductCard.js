import React from 'react';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

let img;
const bici = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const ProductCard = ({id, remove, photos, name, desc, price, color}) => {
    if(photos[0]) img = bici;
    else img = photos[0];
    return(
    <aside style={{backgroundColor:color ? color:null}}>
        <DeleteForever
            onClick={()=>remove(id)}
            style={{
                position:"absolute",
                top:0,
                color:"darkgrey"
            }}
        />
        <img src={img} alt=""/>
        <h4>{name}</h4>
        <p>{desc}</p>
        <span>$ {price} MXN</span>
    </aside>
    );
};