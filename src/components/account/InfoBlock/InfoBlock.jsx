import { Route, Routes } from 'react-router-dom'
import Calendar from '../../calendar/Calendar'
import Entity from '../../entity/Entity'
import Messages from '../../messages/Messages'
import NotFound from '../../notFound/NotFound'
import Profile from '../../profile/Profile'
import Tasks from '../../tasks/Tasks'
import Users from '../../users/Users'

export default function InfoBlock() {
	return (
		<Routes>
			<Route
				index
				element={<div>Тут инфа о странице какие возможности и тд и тп</div>}
			/>
			<Route path='profile' element={<Profile />} />
			<Route path='tasks/*' element={<Tasks />} />
			<Route path='users' element={<Users />} />
			<Route path='messages' element={<Messages />} />
			<Route path='calendar' element={<Calendar />} />
			<Route path='entity' element={<Entity />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
	)
}
