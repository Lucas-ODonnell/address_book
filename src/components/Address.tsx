import React, { useState } from 'react';
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
	const [addresses, setAddresses] = useState<AddressInfo[]>([])

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		setAddressForm({...addressForm, [e.currentTarget.name]: e.currentTarget.value})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAddresses([...addresses, addressForm])
	}
	return (
		<div className="container">
			<div className="content">
				<AddressForm {...{handleChange, addressForm, handleSubmit}}/>
				<AddressIndex />
			</div>
		</div>
	)
}

export default Address;
