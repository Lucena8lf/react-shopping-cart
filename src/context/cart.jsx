import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState(() => {
		const cartFromStorage = window.localStorage.getItem('cart');
		if (cartFromStorage) return JSON.parse(cartFromStorage);
		return [];
	});

	const addToCart = (product) => {
		/* Añade un producto al carro */
		// Comprobamos si el producto ya está en el carro
		const productInCartIndex = cart.findIndex((item) => item.id === product.id);

		if (productInCartIndex >= 0) {
			// Con structuredClone
			//const newCart = structuredClone(cart);
			//newCart[productInCartIndex].quantity += 1;

			// Con slice (más rápida)
			const newCart = [
				...cart.slice(0, productInCartIndex),
				{
					...cart[productInCartIndex],
					quantity: cart[productInCartIndex].quantity + 1,
				},
				...cart.slice(productInCartIndex + 1),
			];
			window.localStorage.setItem('cart', JSON.stringify(newCart));
			return setCart(newCart);
		}

		// No está el producto en el carro
		const newCart = [...cart, { ...product, quantity: 1 }];
		setCart(newCart);
		window.localStorage.setItem('cart', JSON.stringify(newCart));
	};

	const clearCart = () => {
		setCart([]);
		window.localStorage.removeItem('cart');
	};

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	const removeFromCart = (product) => {
		//setCart((prevState) => prevState.filter((item) => item.id != product.id));
		const newCart = cart.filter((item) => item.id != product.id);
		setCart(newCart);
		window.localStorage.setItem('cart', JSON.stringify(newCart));
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, clearCart, checkProductInCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
