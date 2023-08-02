import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Navbar';

const Header = () => {
	return (
		<MainHeader>
			<NavLink to='/'>
				<Logo src='./images/logo.png' alt="My logo img"/>
			</NavLink>
			<Nav/>
		</MainHeader>
	)
}

const MainHeader = styled.header`
	padding:0 4.8rem;
	height:10rem;
	background-color: ${({theme}) => theme.colors.bg};
	display:flex;
	justify-content:space-between;
	align-items: center;
	position: relative;
`;

const Logo = styled.img`
	height:100px;
	mix-blend-mode:multiply;
`;

export default Header
