import React from 'react'
import HeroSection from './Components/HeroSection';



const About = () => {

	const data= {
		name:"shop",
		type:"e-commerce",
	}

	return (
		<HeroSection data={data}/>
	)
}

export default About
