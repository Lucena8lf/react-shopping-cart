import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		/* Añade un producto al carro */
		// Comprobamos si el producto ya está en el carro
		const productInCartIndex = cart.findIndex((item) => item.id === product.id);

		if (productInCartIndex >= 0) {
			const newCart = cart.slice();
			//const newCart = structuredClone(cart);
			newCart[productInCartIndex].quantity += 1;
			return setCart(newCart);
		}

		// No está el producto en el carro
		setCart((prevState) => {
			return [...prevState, { ...product, quantity: 1 }];
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	const removeFromCart = (product) => {
		setCart((prevState) => prevState.filter((item) => item.id != product.id));
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, clearCart, checkProductInCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
