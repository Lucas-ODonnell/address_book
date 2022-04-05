import React, { useState } from 'react';
import { AddressInfo } from '../CustomTypes';
import CreateAddress from './CreateAddress';

interface Props {
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent)=> void;
	addressForm: AddressInfo;
}

const AddressForm: React.FC<Props> = ({addressForm, handleChange, handleSubmit}) => {
	const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
	return (
		<section>
			<div onClick={()=>setShowAddressForm(true)} className="new-address">
					<button>New Address</button>
			</div>
			{
			showAddressForm ? 
			<CreateAddress {...{setShowAddressForm, addressForm, handleChange, handleSubmit}}/>
			:
			<div></div>
			}
		</section>
	)
}

export default AddressForm;
