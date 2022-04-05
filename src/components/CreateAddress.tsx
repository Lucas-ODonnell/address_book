import React from 'react';

interface Props {
	setShowAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAddress: React.FC<Props> = ({setShowAddressForm}) => {
	return (
		<section>
			<div className="address-form-container">
				<div className="address-form-content">
					<div className="form-header">
						<div onClick={()=>setShowAddressForm(false)}>&times;</div>
					</div>
					<form className="address-form">
						<div className="field">
							<label>Name </label>
							<input name="name"/>
						</div>
						<div className="field">
							<label>Address </label>
							<input name="address"/>
						</div>
						<div className="contact-row">
							<div className="field">
								<label>Email </label>
								<input name="email"/>
							</div>
							<div className="field">
								<label>Phone </label>
								<input name="phone"/>
							</div>
						</div>
						<div className="field">
							<label>Notes </label>
							<input name="notes"/>
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
