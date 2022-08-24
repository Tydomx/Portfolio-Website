import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
	return (
		<footer>
			<div className="faIcons">
				<a href="https://www.linkedin.com/in/michael-thai/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="m-1 fa-2xl  faIcon"></FontAwesomeIcon>
				</a>
				<a href="https://github.com/Tydomx" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="m-1 fa-2xl faIcon"></FontAwesomeIcon>
				</a>
				<a href="https://www.youtube.com/channel/UCPil7COEoMAcX2vLkkkmGOw" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faYoutube} className="m-1 fa-2xl faIcon"></FontAwesomeIcon>
				</a>
			</div>
		</footer>
	)
}

export default Footer;