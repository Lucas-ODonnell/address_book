import React, { useState, useEffect } from 'react';
import { AddressInfo } from '../CustomTypes';
import AddressForm from './AddressForm';
import AddressIndex from './AddressIndex';
import './Address.css';

const Address: React.FC = () => {
	const [addressForm, setAddressForm] = useState<AddressInfo>({
		name: '',
		address: '',
		email: '',
		phone: '',
		notes: ''
	})
	const [addresses, setAddresses] = useState<AddressInfo[]>(()=>{
		const data = localStorage.getItem("addresses");
		return data ? JSON.parse(data) : [];
	})

	useEffect(()=> {
		localStorage.setItem('addresses', JSON.stringify(addresses));
			},[addresses])

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		setAddressForm({...addressForm, [e.currentTarget.name]: e.currentTarget.value})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAddresses([...addresses, addressForm])
		setAddressForm({
			name: '',
			address: '',
			email: '',
			phone: '',
			notes: ''
		})
		localStorage.setItem('addresses', JSON.stringify(addresses));
	}

	return (
		<div className="container">
			<div className="content">
				<AddressForm {...{handleChange, addressForm, handleSubmit}}/>
				<AddressIndex {...{addresses}}/>
			</div>
		</div>
	)
}

export default Address;
