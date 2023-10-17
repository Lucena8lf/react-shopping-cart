import { useState } from 'react';
import './Filters.css';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const { filters, setFilters } = useFilters();

	const handleChangeMinPrice = (event) => {
		const value = event.target.value;
		setFilters((prevState) => ({ ...prevState, minPrice: value }));
	};

	const handleChangeCategory = (event) => {
		setFilters((prevState) => ({ ...prevState, category: event.target.value }));
	};

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Precio a partir de:</label>
				<input
					type='range'
					id={minPriceFilterId}
					min={0}
					max={2000}
					value={filters.minPrice}
					onChange={handleChangeMinPrice}
				/>
				<span>{filters.minPrice}$</span>
			</div>
			<div>
				<label htmlFor={categoryFilterId}>Categoría:</label>
				<select id={categoryFilterId} onChange={handleChangeCategory}>
					<option value='all'>Todo</option>
					<option value='laptops'>Portátiles</option>
					<option value='smartphones'>Móviles</option>
				</select>
			</div>
		</section>
	);
}
