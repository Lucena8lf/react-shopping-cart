import { useReducer } from 'react';
import { cartInitialState, cartReducer } from '../reducers/cartReducer';

const CART_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART',
};

export function useCartReducer() {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState);

	const addToCart = (product) =>
		dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });

	const removeFromCart = (product) =>
		dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product });

	const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

	const checkProductInCart = (product) => {
		return state.some((item) => item.id === product.id);
	};

	return { state, addToCart, removeFromCart, clearCart, checkProductInCart };
}
