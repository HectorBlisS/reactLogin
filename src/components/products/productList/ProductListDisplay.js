/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
const bici = "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/75/4e5c758d7fd17e2fb51a9e17f255788b.jpg";

export const ProductListDisplay = ({products}) => {
    return (
        <section>
            <h2>Lista de Productos:</h2>
            <article className="product-container" >
                <aside>
                    <img src={bici} alt=""/>
                    <h4>Titulos</h4>
                    <p>Descripción</p>
                    <span>$Precio</span>
                </aside>

                <aside>
                    <img src={bici} alt=""/>
                    <h4>Titulos</h4>
                    <p>Descripción</p>
                    <span>$Precio</span>
                </aside>

                <aside>
                    <img src={bici} alt=""/>
                    <h4>Titulos</h4>
                    <p>Descripción</p>
                    <span>$Precio</span>
                </aside>

                <aside>
                    <img src={bici} alt=""/>
                    <h4>Titulos</h4>
                    <p>Descripción</p>
                    <span>$Precio</span>
                </aside>

            </article>

        </section>
    );
};

//ProductListDisplay.propTypes = {};

const styles = {
    name: {}
};

