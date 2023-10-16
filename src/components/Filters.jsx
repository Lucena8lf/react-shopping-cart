import { useState } from 'react';
import './Filters.css';
import { useId } from 'react';

export function Filters({ setFilters }) {
	const [minPrice, setMinPrice] = useState(0);

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = (event) => {
		const value = event.target.value;
		setMinPrice(value);
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
					value={minPrice}
					onChange={handleChangeMinPrice}
				/>
				<span>{minPrice}$</span>
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
