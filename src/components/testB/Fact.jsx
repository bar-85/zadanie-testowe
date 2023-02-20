import { useState, useEffect } from 'react'
import './Fact.css'
import path1 from '../../assets/path1.png'
import path2 from '../../assets/path2.png'
import path3 from '../../assets/path3.png'
import path4 from '../../assets/path4.png'
import sub1 from '../../assets/Subtraction1.png'
import sub2 from '../../assets/Subtraction2.png'
import sub3 from '../../assets/Subtraction3.png'
import ellipse from '../../assets/Ellipse1.png'

const Fact = () => {
	const [downloadCount, setDownloadCount] = useState(0)
	const [clientCount, setClientCount] = useState(1150)
	const [userCount, setUserCount] = useState(0)
	const [reviewCount, setReviewCount] = useState(2450)

	useEffect(() => {
		const downloadTimer = setInterval(() => {
			if (downloadCount < 25) {
				setDownloadCount(downloadCount => downloadCount + 1)
			}
		}, 50)

		const clientTimer = setInterval(() => {
			if (clientCount < 1200) {
				setClientCount(clientCount => clientCount + 1)
			}
		}, 50)

		const userTimer = setInterval(() => {
			if (userCount < 14) {
				setUserCount(userCount => userCount + 1)
			}
		}, 50)

		const reviewTimer = setInterval(() => {
			if (reviewCount < 2500) {
				setReviewCount(reviewCount => reviewCount + 1)
			}
		}, 50)

		return () => {
			clearInterval(downloadTimer)
			clearInterval(clientTimer)
			clearInterval(userTimer)
			clearInterval(reviewTimer)
		}
	}, [downloadCount, clientCount, userCount, reviewCount])

	return (
		<div className='fact'>
			<div className='back'>
				<img className='sub_one' src={sub1} alt='' />
				<img className='sub_two' src={sub2} alt='' />
				<img className='sub_three' src={sub3} alt='' />
				<img className='ellipse' src={ellipse} alt='' />
				<div className='items'>
					<div className='item download'>
						<img src={path1} alt='item download' className='img_download' />
						<div className='number num_one'>{downloadCount >= 25 ? 25 : downloadCount}K+</div>
						<p className='fact_text'>App Downloads</p>
					</div>
					<div className='item happy'>
						<img src={path2} alt='item happy' className='img_happy' />
						<div className='number num_two'>{clientCount >= 1200 ? 1200 : clientCount}</div>
						<p className='fact_text'>Happy Clients</p>
					</div>
					<div className='item active_item'>
						<img src={path3} alt='item active' className='img_active' />
						<div className='number num_three'>{userCount >= 14 ? 14 : userCount}+</div>
						<p className='fact_text'>Active User</p>
					</div>
					<div className='item total'>
						<img src={path4} alt='item total' className='img_total' />
						<div className='number num_four'>{reviewCount >= 2500 ? 2500 : reviewCount}+</div>
						<p className='fact_text'>Total Reviews</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fact
