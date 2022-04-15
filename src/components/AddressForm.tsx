import React from 'react';
import CreateUpdate from './CreateUpdate';

interface Props {
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	buttonName: string
	setButtonName: React.Dispatch<React.SetStateAction<string>>;
}

const AddressForm: React.FC<Props> = ({showForm, setShowForm, buttonName, setButtonName}) => {
	return (
		<section>
			<div className="new-address">
					<button onClick={()=>{setShowForm(true); setButtonName("Submit");}}>New Address</button>
			</div>
			{
			showForm ? 
			<CreateUpdate {...{setShowForm, buttonName}}/>
			:
			<div></div>
			}
		</section>
	)
}

export default AddressForm;
