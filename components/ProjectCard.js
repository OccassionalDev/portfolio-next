import React, { Component } from "react";
import ProjectModal from "./ProjectModal";

export class ProjectCard extends Component {
	render() {
		return (
			<div className="project-card">
				<img className="project-image" src={this.props.image}></img>
				<p className="project-title">{this.props.title}</p>
			</div>
		);
	}
}

export default ProjectCard;

ProjectCard.defaultProps = {
	videoLink: "",
	liveDemoLink: "",
};
