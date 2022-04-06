import React from 'react';
import { AddressInfo } from '../CustomTypes';
import CreateUpdate from './CreateUpdate';

interface Props {
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent)=> void;
	addressForm: AddressInfo;
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	buttonName: string;
	setButtonName: React.Dispatch<React.SetStateAction<string>>;
}

const AddressForm: React.FC<Props> = ({addressForm, handleChange, handleSubmit, showForm, setShowForm, buttonName, setButtonName}) => {
	return (
		<section>
			<div className="new-address">
					<button onClick={()=>{setShowForm(true); setButtonName("Submit");}}>New Address</button>
			</div>
			{
			showForm ? 
			<CreateUpdate {...{addressForm, setShowForm, handleChange, handleSubmit, buttonName}}/>
			:
			<div></div>
			}
		</section>
	)
}

export default AddressForm;
