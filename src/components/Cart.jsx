import { useId } from 'react';
import {
	AddToCartIcon,
	RemoveFromCartIcon,
	ClearCartIcon,
	CartIcon,
} from './Icons';
import './Cart.css';

export function Cart() {
	const cartCheckboxId = useId();
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
						<li>
							<img
								src='https://i.dummyjson.com/data/products/2/thumbnail.jpg'
								alt='iphone'
							></img>
							<div className='product-information'>
								<strong>Iphone X (móviles)</strong>
								<span>1500$</span>
							</div>
							<footer className='cart-quantity'>
								<button className='add-button'>+</button>
								<span>Cantidad: 1</span>
							</footer>
						</li>
					</ul>
				</aside>
			</div>
		</div>
	);
}
