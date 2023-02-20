import { useState } from 'react'
import './Content.css'
import phone from '../../assets/image.png'
import user from '../../assets/user.png'
import block from '../../assets/block.png'
import finger from '../../assets/fingerprint.png'
import group from '../../assets/Group1.png'

const Content = () => {
	const [clicks, setClicks] = useState({ container1: 0, container2: 0, container3: 0 })
	const [disabled, setDisabled] = useState({ container1: false, container2: true, container3: false })
	const [activeContainer, setActiveContainer] = useState('container2')

	const handleClick = containerName => {
		if (!disabled[containerName]) {
			setClicks(prevState => ({ ...prevState, [containerName]: prevState[containerName] + 1 }))
			setDisabled(prevState => ({
				...Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, key === containerName ? true : false])),
			}))
			setActiveContainer(containerName)
		}
	}

	const { container1, container2, container3 } = clicks

	console.log(`Container one: ${container1}`)
	console.log(`Container two: ${container2}`)
	console.log(`Container three: ${container3}`)

	return (
		<div className='page_container'>
			<div className='container'>
				<div className='left'>
					<div className='content'>
						<div className='container_one'>
							<div
								onClick={() => handleClick('container1')}
								disabled={disabled.container1}
								className={activeContainer === 'container1' ? 'active' : ''}>
								<div className='logo_container'>
									<div className='border'>
										<img src={finger} alt='Logo 1' className='logo finger' />
									</div>
									<p className='title_logo title_one'>Install the App</p>
								</div>
								<div className='text text_one'>
									<p>Big, small, online, offline, local or international. Size doesn't matter. We work on diverse projects for top brands.</p>
								</div>
							</div>
						</div>
						<div className='container_two'>
							<div
								onClick={() => handleClick('container2')}
								disabled={disabled.container2}
								className={activeContainer === 'container2' ? 'active' : ''}>
								<div className='logo_container'>
									<div className='border'>
										<img src={block} alt='Logo block' className='logo block' />
									</div>
									<p className='title_logo title_two'>Login First</p>
								</div>
								<div className='text text_two'>
									<p>Most popular type of partnership. limited liabilities, Size doesn't work on diverse projects for top brands.</p>
								</div>
							</div>
						</div>
						<div className='container_three'>
							<div
								onClick={() => handleClick('container3')}
								disabled={disabled.container3}
								className={activeContainer === 'container3' ? 'active' : ''}>
								<div className='logo_container'>
									<div className='border'>
										<img src={user} alt='Logo user' className='logo user' />
									</div>
									<p className='title_logo title_three'>Setup Your Profile</p>
								</div>
								<div className='text text_three'>
									<p>Popular type of partnership. limited liabilities, in fact, the only Size doesn't matter. diverse projects for top brands.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='image'>
						<img src={phone} alt='phone ' className='photo of the phone' />
						<img className='group group_one' src={group} alt='group dots' />
						<img className='group group_two' src={group} alt='group dots' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content
