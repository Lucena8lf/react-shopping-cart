import { createContext, useState } from 'react';

// 1. Creamos el contexto
export const FiltersContext = createContext();

// 2. Creamos el Provider
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		minPrice: 0,
		category: 'all',
	});
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}
