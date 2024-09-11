import InfoBlock from './InfoBlock/InfoBlock'
import NavBlock from './navBlock/NavBlock'

export default function Account() {
	return (
		<div className='flex flex-row gap-5 h-screen w-screen p-14'>
			<div className='w-1/6'>
				<NavBlock />
			</div>
			<div className='grow bg-grey rounded-lg w-5/6'>
				<InfoBlock />
			</div>
		</div>
	)
}
