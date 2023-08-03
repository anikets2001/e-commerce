import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";


const BreadCrumbs = (props) => {

	const { title } = props;

	return (
		<Wrapper>
			<pre>
				<NavLink to="/" className="nav-link">
					home
				</NavLink> {">"} {title}
			</pre>
		</Wrapper>
	)
}

const Wrapper = styled.section`

	.nav-link {
		font-size:18px;
		
	}
	height: 10rem;
	background-color: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 18px;
	padding-left: 1.2rem;
`;


export default BreadCrumbs
