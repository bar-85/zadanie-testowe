import React, { useState } from 'react'
import './Screenshots.css'
import ScreenshotsTitle from './ScreenshotsTitle'
import arrow1 from '../../assets/Arrow.png'
import arrow2 from '../../assets/Arrow2.png'
import mockup1 from '../../assets/Mockup.png'
import mockup2 from '../../assets/Mockup1.png'
import mockup3 from '../../assets/Mockup2.png'
import mockup4 from '../../assets/Mockup2.png'
import mockup5 from '../../assets/Mockup4.png'

import Slider from 'react-slick'

const images = [mockup1, mockup2, mockup3, mockup4, mockup5]
const slideClasses = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5']

const Screenshots = () => {
	const NextArrow = ({ onClick }) => {
		return (
			<div className='arrow2' onClick={onClick}>
				<img className='arrow_two' src={arrow2} alt='arrow' />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div className='arrow1' onClick={onClick}>
				<img className='arrow_one' src={arrow1} alt='arrow' />
			</div>
		)
	}

	const [imageIndex, setImageIndex] = useState(0)

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '100px',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	}

	return (
		<div className='screenshot'>
			<ScreenshotsTitle />

			<div className='screen_image'>
				<Slider {...settings}>
					{slideClasses.map((slideClass, index) => (
						<div key={slideClass} className={`${slideClass} ${index === imageIndex ? 'activeSlide' : 'slide'}`}>
							<img src={images[index]} alt={images[index]} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default Screenshots
