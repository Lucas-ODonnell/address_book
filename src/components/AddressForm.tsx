import React, { useState } from 'react';
import CreateAddress from './CreateAddress';


const AddressForm: React.FC = () => {
	const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
	return (
		<section>
			<div onClick={()=>setShowAddressForm(true)} className="new-address">
					<button>New Address</button>
			</div>
			{
			showAddressForm ? 
			<CreateAddress {...{setShowAddressForm}}/>
			:
			<div></div>
			}
		</section>
	)
}

export default AddressForm;
