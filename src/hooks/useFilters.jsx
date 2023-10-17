import { useState, useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {
	//const [filters, setFilters] = useState({
	//	minPrice: 0,
	//	category: 'all',
	//});

	const { filters, setFilters } = useContext(FiltersContext);

	if (filters === undefined || setFilters === undefined) {
		throw new Error('useFilters debe usarse dentro de un FiltersProvider');
	}

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
