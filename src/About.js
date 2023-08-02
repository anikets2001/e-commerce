import React from 'react'
import HeroSection from './Components/HeroSection';
// import { useProductContext } from './Context/productcontext';

const About = () => {
	// const { myName } = useProductContext();

	const data = {
		name: "shop",
		type: "e-commerce",
}

	return (
		<React.Fragment>
			<HeroSection data={data} />
		</React.Fragment>
	)
}

export default About
