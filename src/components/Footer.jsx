import { useContext } from 'react';
import './Footer.css';
import { CartContext } from '../context/cart';
import reactIcon from '../assets/react.svg';

export function Footer() {
	//const { cart } = useContext(CartContext);
	return (
		<footer className='footer'>
			{/* Easy debugger 
			JSON.stringify(cart, null, 2)*/}
			<h5>Ecommerce + Carrito ⚛️</h5>
		</footer>
	);
}
