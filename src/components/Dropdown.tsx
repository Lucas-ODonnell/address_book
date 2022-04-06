import React, { useState } from 'react';
import './Dropdown.css';
import { ItemInfo } from '../CustomTypes';

interface Props {
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown: React.FC<Props> = ({setSortBy}) => {
	const items = [
		{
			id: 1,
			value: 'Name'
		},
		{
			id: 2,
			value: "Email"
		},
	];
	const [open, setOpen] = useState<boolean>(false);
	const [selection, setSelection] = useState<ItemInfo[]>([])
	const toggle = () => setOpen(!open);
		const handleClick = (item: ItemInfo) => {
		if (!selection.find(current => current.id === item.id)) {
			setSelection([item])
		} else {
			let selectionAfterRemoval = selection;
			selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
			setSelection([...selectionAfterRemoval])
		}
	}
	
	return (
		<div className="dropdown-wrapper">
			<div tabIndex={0}
				className="dropdown-header"
				onClick={()=> toggle()}
			>
				<div className="dropdown-header">
					<p>Sort by </p>
				</div>
			</div>
			{open && (
				<ul className="list">
					{items.map(item => (
						<li className="list-item" key={item.id}>
							<button type="button" onClick={()=> {handleClick(item); setSortBy(item.value)}}>
								<span>{item.value}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Dropdown;
