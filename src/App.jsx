import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { useFilters } from './hooks/useFilters';

import { products } from './mocks/products';

import { CartProvider } from './context/cart';

export function App() {
	const { filters, setFilters, filterProducts } = useFilters(products);
	const filteredProducts = filterProducts(products);
	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={filteredProducts} />
			<Footer />
		</CartProvider>
	);
}
