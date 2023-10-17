import { Filters } from './Filters';

export function Header({ setFilters }) {
	return (
		<header>
			<h1>Shopping cart</h1>
			<Filters />
		</header>
	);
}
