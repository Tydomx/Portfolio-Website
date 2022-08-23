import React, { useState } from 'react';
import './navbar.css';

function Nav() {
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
				Michael Thai
			</a>
			<ul className={active}>
				<li className='navItem'>
					<a href='#about' className='navLink'>
						About
					</a>
				</li>
				<li className='navItem'>
					<a href='#resume' className='navLink'>
						Resume
					</a>
				</li>
				<li className='navItem'>
					<a href='#portfolio' className='navLink'>
						Portfolio
					</a>
				</li>
				<li className='navItem'>
					<a href='#contact' className='navLink'>
						Contact
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