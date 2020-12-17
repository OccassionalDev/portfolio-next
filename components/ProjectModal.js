import React, { Component } from "react";
import Modal from "react-modal";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProjectModal extends Component {
	constructor() {
		super(props);
		this.state = {
			displayModal: false,
		};
	}

	displayVideoLink = () => {
		if (this.props.videoLink !== "") {
			return (
				<>
					<FontAwesomeIcon icon={faVideo} />
					<a
						href={this.props.videoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Video Demo
					</a>
				</>
			);
		}
	};

	displayLiveDemoLink = () => {
		if (this.props.liveDemoLink !== "") {
			return (
				<>
					<FontAwesomeIcon icon={faLink} />
					<a
						href={this.props.liveDemoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Live Demo
					</a>
				</>
			);
		}
	};

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<a
					href={this.props.githubLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faCode} /> Github Repository
				</a>

				{this.displayVideoLink()}
				{this.displayLiveDemoLink()}
			</div>
		);
	}
}

export default ProjectModal;

ProjectModal.defaultProps = {
	videoLink: "",
	liveDemoLink: "",
};
