import React from 'react';
import lupe from '../../../assets/bici.jpg';
import FontAwesome from 'react-fontawesome';


export const ProductDetailDisplay = ({photos, onOpen, name="Mi bici rota", desc="la bici esta rota ya no la quiero pro eso la vendo"}) => (
		<section>

			<article style={{backgroundImage:`url(${photos ? photos[0]:lupe})`}} className="detail-hero">
				<button>
					Comprar
				</button>
				<FontAwesome 
					onClick={onOpen}
					style={{
						position:"absolute", 
						bottom:"20px",
						left:"20px",
						color:"orange"
					}}
					size="5x"
					name="pencil-square-o" />
			</article>
			<article className="detail-desc">
				<h2>
					{name}
				</h2>
				<p>
					{desc}
				</p>
			</article>


		</section>
	);