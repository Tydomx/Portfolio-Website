import React from "react";
import './about.css';
import profileImage from '../../../assets/images/michaelProfile.jpg';

export default function About() {
	return (
		<div className="container">
			<h1 id="#about">About me</h1>
			<h2>Fullstack Web Development Student</h2>
			<div className="image">
				<img src={profileImage} className='my-2 pt-5' style={{ width: "15%" }} alt='Profile' />
			</div>
			<p className="p-5" id="#aboutMe">Michael Thai is a fullstack web development student looking to complete his certificate from the coding bootcamp at UT-Austin at the end of August 2022. He has a strong willingness for working in team environments. He has worked customer service before for a few years before realizing that learning to code and creating apps with his creativity was a passion of his.</p>
		</div>
	)
}