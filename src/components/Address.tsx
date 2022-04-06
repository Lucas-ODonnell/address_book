import React, { useState, useEffect } from 'react';
import { AddressInfo } from '../CustomTypes';
import AddressForm from './AddressForm';
import AddressIndex from './AddressIndex';
import { v4 as uuidv4 } from 'uuid';
import './Address.css';

const Address: React.FC = () => {
	const [buttonName, setButtonName] = useState<string>("")
	const [id, setId] = useState<string>("");
	const [showForm, setShowForm] = useState<boolean>(false);
	const [addresses, setAddresses] = useState<AddressInfo[]>(()=>{
		const data = localStorage.getItem("addresses");
		return data ? JSON.parse(data) : [];
	})
	const [addressForm, setAddressForm] = useState<AddressInfo>({
		id: '',
		name: '',
		address: '',
		email: '',
		phone: '',
		notes: ''
	})

	useEffect(()=> {
		localStorage.setItem('addresses', JSON.stringify(addresses));
	},[addresses,])

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		setAddressForm({...addressForm, [e.currentTarget.name]: e.currentTarget.value})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (id === "") {
			addressForm.id = uuidv4();
			setAddresses([...addresses, addressForm])
			setAddressForm({
				id: '',
				name: '',
				address: '',
				email: '',
				phone: '',
				notes: ''
			})
		} else {
			let updatedAddresses = addresses.map(address => {
				if (address.id === id) {
					address.name = addressForm.name === "" ? address.name : addressForm.name
					address.address = addressForm.address === "" ? address.address : addressForm.address
					address.email = addressForm.email === "" ? address.email : addressForm.email
					address.phone = addressForm.phone === "" ? address.phone : addressForm.phone
					address.notes = addressForm.notes === "" ? address.notes : addressForm.notes
				} 
				return address
			})
			setAddresses(updatedAddresses)
			setId("");
			setAddressForm({
				id: '',
				name: '',
				address: '',
				email: '',
				phone: '',
				notes: ''
			})
		}
	}

	const handleDelete = (id: string) => {
		setAddresses(addresses.filter(item => item.id !== id));
	}

	return (
		<div className="container">
			<div className="content">
				<AddressForm {...{handleChange, addressForm, handleSubmit, showForm, setShowForm, buttonName, setButtonName}}/>
				<AddressIndex {...{addresses, handleDelete, setShowForm,showForm, addressForm, handleChange, handleSubmit, setId, buttonName, setButtonName}}/>
			</div>
		</div>
	)
}

export default Address;
