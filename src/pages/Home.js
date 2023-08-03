import React from 'react';
import FeatureProduct from '../Components/FeatureProduct';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services'
import Trusted from '../Components/Trusted'

const Home = () => {

	const data = {
		name: "Store"
	}

	return (
		<React.Fragment>
			<HeroSection data={data} />
			<FeatureProduct />
			<Services />
			<Trusted />
		</React.Fragment>

	)
}

export default Home
