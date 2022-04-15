import React, { useState} from 'react';
import AddressForm from './AddressForm';
import AddressIndex from './AddressIndex';
import './Address.css';

const Address: React.FC = () => {
	const [showForm, setShowForm] = useState<boolean>(false);
	const [buttonName, setButtonName] = useState<string>("")
	
	return (
		<div className="container">
			<div className="content">
				<div className="title-header">
					<h1>Address Book</h1>
				</div>
				<AddressForm {...{showForm, setShowForm, buttonName, setButtonName}}/>
				<AddressIndex {...{showForm, setShowForm, buttonName, setButtonName}}/>
			</div>
		</div>
	)
}

export default Address;
