import React, { Component } from "react";
import ProjectModal from "./ProjectModal";

export class ProjectCard extends Component {
	constructor() {
		super(props);
		this.state = {
			image: props.image,
			title: props.title,
			description: props.description,
			github: props.github,
			video: props.video,
			link: props.link,
		};
	}

	render() {
		return (
			<div className="project-card">
				<img className="project-image" src={this.state.image}></img>
				<p className="project-title">{this.state.title}</p>
			</div>
		);
	}
}

export default ProjectCard;

ProjectCard.defaultProps = {
	video: "",
	link: "",
};
