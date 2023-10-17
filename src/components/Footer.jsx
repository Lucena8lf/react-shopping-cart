import { useContext } from 'react';
import './Footer.css';
import { CartContext } from '../context/cart';

export function Footer() {
	const { cart } = useContext(CartContext);
	return (
		<footer className='footer'>
			{/* Easy debugger 
			JSON.stringify(cart, null, 2)*/}
			<h4>Carrito</h4>
		</footer>
	);
}
