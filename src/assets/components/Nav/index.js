import React, { useState } from 'react';
import './navbar.css';

function Nav({ currentPage, changePage }) {
	const [active, setActive] = useState('navMenu');
	const [toggleIcon, setToggleIcon] = useState('navToggler');

	const navToggle = () => {
		active === 'navMenu'
			? setActive('navMenu navActive')
			: setActive('navMenu');

		// toggleIcon
		toggleIcon === 'navToggler'
			? setToggleIcon('navToggler toggle')
			: setToggleIcon('navToggler');
	};

	return (
		<nav className='nav'>
			<a href='#' className='navBrand'>
				<span onClick={() => changePage('about')} className={currentPage === 'about' ? 'navActive' : ''}>
					Michael Thai
				</span>
			</a>
			<ul className={active}>
				<li className='navItem'>
					<a href='#about' className='navLink'>
						<span onClick={() => changePage('about')} className={currentPage === 'about' ? 'navActive' : ''}>
							About
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#resume' className='navLink'>
						<span onClick={() => changePage('resume')} className={currentPage === 'resume' ? 'navActive' : ''}>
							Resume
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#portfolio' className='navLink'>
						<span onClick={() => changePage('portfolio')} className={currentPage === 'portfolio' ? 'navActive' : ''}>
							Portfolio
						</span>
					</a>
				</li>
				<li className='navItem'>
					<a href='#contact' className='navLink'>
						<span onClick={() => changePage('contact')} className={currentPage === 'contact' ? 'navActive' : ''}>
							Contact
						</span>
					</a>
				</li>
			</ul>
			<div onClick={navToggle} className={toggleIcon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Nav;