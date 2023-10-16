import { useState } from 'react';

export function useFilters() {
	const [filters, setFilters] = useState({
		minPrice: 0,
		category: 'all',
	});

	// Filtramos los productos antes de mostrarlos si es necesario
	const filterProducts = (products) => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category)
			);
		});
	};

	return { filters, setFilters, filterProducts };
}
