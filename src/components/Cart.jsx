import { useId } from 'react';
import {
	AddToCartIcon,
	RemoveFromCartIcon,
	ClearCartIcon,
	CartIcon,
} from './Icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';

export function Cart() {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();
	console.log(cart);
	return (
		<div>
			<label htmlFor={cartCheckboxId} className='cart-button'>
				<CartIcon />
			</label>
			<input
				type='checkbox'
				id={cartCheckboxId}
				className='cart-button-checkbox'
			/>
			<div className='cart'>
				<aside>
					<ul>
						{cart.map((cartItem) => {
							return (
								<li key={cartItem.id}>
									<img
										src={cartItem.thumbnail}
										alt={cartItem.description}
									></img>
									<div className='product-information'>
										<strong>
											{cartItem.title} ({cartItem.category})
										</strong>
										<span>{cartItem.price}$</span>
									</div>
									<footer className='cart-quantity'>
										<button
											className='add-button'
											onClick={() => addToCart(cartItem)}
										>
											+
										</button>
										<span>{cartItem.quantity}</span>
									</footer>
								</li>
							);
						})}
					</ul>
					{cart.length > 0 && (
						<div className='clear-cart-button'>
							<span>Borrar artículos: </span>
							<button onClick={() => clearCart()}>
								<ClearCartIcon />
							</button>
						</div>
					)}
				</aside>
			</div>
		</div>
	);
}
