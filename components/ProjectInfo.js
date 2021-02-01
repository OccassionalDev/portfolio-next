import React, { Component } from "react";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProjectInfo extends Component {
	render() {
		return (
			<div className="project-card">
				<img className="project-image" src={this.props.image}></img>
				<h1 className="project-title">{this.props.title}</h1>

				<p className="project-information">{this.props.information}</p>
			</div>
		);
	}
}

export default ProjectInfo;

ProjectInfo.defaultProps = {
	videoLink: "",
	liveDemoLink: "",
	repoBackendLink: "",
	repoFrontendLink: "",
	repoLink: "",
};
