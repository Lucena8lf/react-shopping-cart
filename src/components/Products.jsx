import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import './Products.css';

/* TODO: coger primera imagen válida ya que es un array */
export function Products({ products }) {
	const { addToCart, checkProductInCart, removeFromCart } = useCart();

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
								<button
									className='add-cart-button'
									style={{
										backgroundColor: checkProductInCart(product)
											? 'red'
											: '#09e',
									}}
									onClick={() =>
										checkProductInCart(product)
											? removeFromCart(product)
											: addToCart(product)
									}
								>
									{checkProductInCart(product) ? (
										<RemoveFromCartIcon />
									) : (
										<AddToCartIcon />
									)}
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
