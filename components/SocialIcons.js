import React, { Component } from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SocialIcons extends Component {
	render() {
		return (
			<div className="social-icons">
				<a
					href="https://github.com/OccassionalDev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} fixedWidth />
				</a>
				<a
					href="https://www.linkedin.com/in/erica-schimmel-22b612162/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
				</a>
			</div>
		);
	}
}

export default SocialIcons;
