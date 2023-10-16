import { Header } from './components/Header';
import { Products } from './components/Products';
import { useFilters } from './hooks/useFilters';

import { products } from './mocks/products';

export function App() {
	const { filters, setFilters, filterProducts } = useFilters(products);
	const filteredProducts = filterProducts(products);
	console.log(filteredProducts);
	return (
		<div>
			<Header setFilters={setFilters} />
			<Products products={filteredProducts} />
		</div>
	);
}
