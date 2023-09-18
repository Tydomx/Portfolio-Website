import React from "react";
import './resume.css';
import pdf from "../../resumePDF/resume.pdf"

export default function Resume() {
	return (
		<section className="containerResume">
			<h2 className="resumeTitle">Resume</h2>

		  <p className="resumeLink">
				Download
				<a className="btn btn-primary" href={pdf} download>
					resume
				</a>
				</p>
			<div>
				<h3 className="listTitle">Front-end Proficiencies 🖥️</h3>
				<ul>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>JQuery</li>
					<li>React</li>
					<li>Bootstrap</li>
					<li>responsive design</li>
				</ul>
			</div>
			<div>
				<h3 className="listTitle">Back-end Proficiencies 🖧</h3>
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB</li>
				</ul>
			</div>
		</section>

	)
}