import React, { useState } from 'react';
import { AddressInfo } from '../CustomTypes';
import CreateUpdate from './CreateUpdate';
import Dropdown from './Dropdown';
import Filter from './Filter';

interface Props {
	addresses: AddressInfo[];
	handleDelete: (id: string) => void;
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	addressForm: AddressInfo;
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent) => void;
	setId: React.Dispatch<React.SetStateAction<string>>;
	buttonName: string;
	setButtonName: React.Dispatch<React.SetStateAction<string>>;
}

const AddressIndex: React.FC<Props> = ({addresses, handleDelete, showForm, setShowForm, addressForm, handleChange, handleSubmit, setId, buttonName, setButtonName}) => {
	const [sortBy, setSortBy] = useState<string>("name");
	const [filter, setFilter] = useState<string>("");

	const handleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		setFilter(e.currentTarget.value);
	}

	const sortList = () => {
		if (sortBy.toLowerCase() === "name") {
			return addresses.sort((a, b) => a.name.localeCompare(b.name))
		}
		return addresses.sort((a, b) => a.email.localeCompare(b.email))
	}

	const addressList = sortList().filter((item) => {
		if (filter === "") {
			return item;
		} else if (item.name.toLowerCase().includes(filter.toLowerCase()) || 
			item.email.toLowerCase().includes(filter.toLowerCase()) || 
			item.phone.toLowerCase().includes(filter.toLowerCase()))
		{
			return item;
		}
	})
	.map((thisAddress, index)=> {
		const { id, name, address, email, phone, notes } = thisAddress
		return (
			<div className="each-address" key={index}>
				<div className="header">
					<button onClick={()=>{setShowForm(true); setId(id); setButtonName("Update");}}>Edit</button>
					<button onClick={()=>handleDelete(id)}>Delete</button>
				</div>
				<div>
					<h3>{name}</h3>
				</div>
				<div>
					<p>{address}</p>
				</div>
				<div>
					<p>{email}</p>
				</div>
				<div>
					<p>{phone}</p>
				</div>
				{notes}
			</div>
		)
	})
	return (
		<section>
			<Filter {...{handleFilterChange, filter}}/>
			<Dropdown {...{setSortBy}}/>
			<div className="address-grid">
				{addressList}	
			</div>
			{showForm ?
			<CreateUpdate {...{setShowForm, addressForm, handleChange, handleSubmit, buttonName}}/>
			:
			<div>
			</div>
			}


		</section>
	)
}

export default AddressIndex;
