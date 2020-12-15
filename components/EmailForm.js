import React, { Component } from "react";

export class EmailForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div id="email-form">
				<form>
					<label>Name</label>
					<br />
					<input type="text" name="name" onChange={this.handleOnChange} />
					<br />

					<label>Email</label>
					<br />
					<input type="email" name="email" onChange={this.handleOnChange} />
					<br />

					<label>Message</label>
					<br />
					<textarea name="message" onChange={this.handleOnChange} />
					<br />

					<input type="submit" value="Send" />
				</form>
			</div>
		);
	}
}

export default EmailForm;
