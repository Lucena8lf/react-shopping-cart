import { AddToCartIcon } from './Icons';
import './Products.css';

/* TODO: coger primera imagen válida ya que es un array */
export function Products({ products }) {
	return (
		<div className='products'>
			<ul className='product'>
				{products.slice(0, 15).map((product) => {
					return (
						<li key={product.id}>
							<div className='product-information'>
								<img
									className='product-image'
									src={product.thumbnail}
									alt={product.description}
								/>
								<strong>
									{product.title} ({product.category})
								</strong>
								<span>{product.price}$</span>
							</div>
							<div className='add-cart'>
								<button className='add-cart-button'>
									<AddToCartIcon />
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
