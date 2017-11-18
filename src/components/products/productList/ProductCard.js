import React from 'react';

let img;
const bici = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const ProductCard = ({photos, name, desc, price, color}) => {
    if(photos[0]) img = bici;
    else img = photos[0];
    return(
    <aside style={{backgroundColor:color ? color:null}}>
        <img src={img} alt=""/>
        <h4>{name}</h4>
        <p>{desc}</p>
        <span>$ {price} MXN</span>
    </aside>
    );
};