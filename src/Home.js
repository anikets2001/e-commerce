import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: ${({ theme }) => theme.colors.bg};
height:100vh;
`;

const Home = () => {
	return (
		<Wrapper>
			Home PAge
		</Wrapper>
	)
}

export default Home
