export const cartInitialState =
	JSON.parse(window.localStorage.getItem('cart')) ?? [];

export const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ADD_TO_CART': {
			// state === cart
			// payload === product
			const productInCartIndex = state.findIndex(
				(item) => item.id === payload.id,
			);

			if (productInCartIndex >= 0) {
				// Con structuredClone
				//const newCart = structuredClone(cart);
				//newCart[productInCartIndex].quantity += 1;

				// Con slice (más rápida)
				const newCart = [
					...state.slice(0, productInCartIndex),
					{
						...state[productInCartIndex],
						quantity: state[productInCartIndex].quantity + 1,
					},
					...state.slice(productInCartIndex + 1),
				];
				window.localStorage.setItem('cart', JSON.stringify(newCart));
				return newCart;
			}

			// No está el producto en el carro
			const newCart = [...state, { ...payload, quantity: 1 }];
			window.localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		}

		case 'REMOVE_FROM_CART': {
			//setCart((prevState) => prevState.filter((item) => item.id != product.id));
			const newCart = state.filter((item) => item.id != payload.id);
			window.localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		}
		case 'CLEAR_CART': {
			window.localStorage.removeItem('cart');
			return [];
		}
	}
};
