import React, { Component } from "react";
import Modal from "react-modal";

export class ProjectModal extends Component {
	constructor() {
		super(props);
		this.state = {
			image: props.image,
			title: props.title,
			description: props.description,
			github: props.github,
			video: props.video,
			link: props.link,
			displayModal: false,
		};
	}

	render() {
		return (
			<div>
				<p>Hello</p>
			</div>
		);
	}
}

export default ProjectModal;

ProjectModal.defaultProps = {
	video: "",
	link: "",
};
