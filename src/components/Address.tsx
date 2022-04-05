import React from 'react';
import AddressForm from './AddressForm';
import AddressIndex from './AddressIndex';
import './Address.css';

const Address: React.FC = () => {
	return (
		<div className="container">
				<div className="content">
					<AddressForm />
					<AddressIndex />
				</div>
			</div>
	)
}

export default Address;
