import React from 'react';
import { AddressInfo } from '../CustomTypes';

interface Props {
	setShowAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent) => void;
	addressForm: AddressInfo;
}

const CreateAddress: React.FC<Props> = ({setShowAddressForm, addressForm, handleChange, handleSubmit}) => {
	return (
		<section>
			<div className="address-form-container">
				<div className="address-form-content">
					<div className="form-header">
						<div onClick={()=>setShowAddressForm(false)}>&times;</div>
					</div>
					<form className="address-form" onSubmit={handleSubmit}>
						<div className="field">
							<label>Name </label>
							<input 
								name="name"
								value={addressForm.name}
								onChange={handleChange}
								type="text"
								/>
						</div>
						<div className="field">
							<label>Address </label>
							<input 
								name="address"
								value={addressForm.address}
								onChange={handleChange}
								type="text"
								/>
						</div>
						<div className="contact-row">
							<div className="field">
								<label>Email </label>
								<input 
									name="email"
									value={addressForm.email}
									onChange={handleChange}
									type="email"
									/>
							</div>
							<div className="field">
								<label>Phone </label>
								<input 
									name="phone"
									value={addressForm.phone}
									onChange={handleChange}
									type="text"
									/>
							</div>
						</div>
						<div className="field">
							<label>Notes </label>
							<input 
								name="notes"
								value={addressForm.notes}
								onChange={handleChange}
								type="text"
								/>
						</div>
						<div className="form-submit">
							<button>Create</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default CreateAddress;
