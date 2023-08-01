import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'

const Home = () => {

	const data={
		name:"Store"
	}

	return (
		<React.Fragment>
		<HeroSection data={data}/>
		<Services/>
		<Trusted/>
		</React.Fragment>

	)
}

export default Home
