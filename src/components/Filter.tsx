import React from 'react';
import './Filter.css';

interface Props {
	handleFilterChange: (e: React.FormEvent<HTMLInputElement>) => void;
	filter: string;
}
const Filter: React.FC<Props> = ({handleFilterChange, filter}) => {
	return (
		<div className="filter">
			<div>
			<input onChange={handleFilterChange} value={filter} placeholder="Filter"/>
			</div>
		</div>
	)
}

export default Filter
