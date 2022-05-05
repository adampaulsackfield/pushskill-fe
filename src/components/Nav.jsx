import React from 'react';
import { StyledNav } from '../styles/Nav.style';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<StyledNav>
			<nav>
				<div>
					<NavLink to='/home'>Home</NavLink>
					<NavLink to='/partners'>Partner</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/help'>Help</NavLink>
					<NavLink to='/faq'>FAQs</NavLink>
				</div>
			</nav>
		</StyledNav>
	);
};

export default Nav;
