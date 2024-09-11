import { NavLink } from 'react-router-dom'

export default function NavBlock() {
	const setActive = ({ isActive }) =>
		isActive
			? 'flex gap-6 rounded-lg bg-main p-5 text-2xl items-center'
			: 'flex gap-6 p-5 text-2xl items-center'

	return (
		<div className='grid grid-rows-6'>
			<div className='flex items-center gap-4 p-5'>
				<img className='w-1/5' src='/public/favicon.svg' alt='icon' />
				<p className=' text-2xl'>Manager Tasks</p>
			</div>
			<NavLink className={setActive} to='profile'>
				<img className='w-1/5' src='/public/profile.png' alt='img' />
				<p>Профиль</p>
			</NavLink>
			<NavLink className={setActive} to='tasks'>
				<img className='w-1/5 ' src='/public/tasks.png' alt='img' />
				<p>Задачи</p>
			</NavLink>
			<NavLink className={setActive} to='users'>
				<img className='w-1/5' src='/public/users.png' alt='img' />
				<p>Пользователи</p>
			</NavLink>
			<NavLink className={setActive} to='messages'>
				<img className='w-1/5' src='/public/message.png' alt='img' />
				<p>Сообщения</p>
			</NavLink>
			<NavLink className={setActive} to='calendar'>
				<img className='w-1/5' src='/public/calendar.png' alt='img' />
				<p>Календарь</p>
			</NavLink>
			<NavLink className={setActive} to='entity'>
				<img className='w-1/5' src='/public/entity.png' alt='img' />
				<p>Организация</p>
			</NavLink>
		</div>
	)
}
