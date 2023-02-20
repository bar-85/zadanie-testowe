import React from 'react'
import Content from '../components/testA/Content'
import Title from '../components/testA/Title'
import Fact from '../components/testB/Fact'
import Screenshots from '../components/testC/Screenshots'
import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<Title />
			<Content />
			<Fact />
			<Screenshots />
		</div>
	)
}

export default Home
