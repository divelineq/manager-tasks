import { NavLink, Route, Routes } from 'react-router-dom'
import NotFound from '../notFound/NotFound'
import AddTask from './add/AddTask'
import MakeTask from './make/MakeTask'
import ReadyTask from './ready/ReadyTask'
import WorkTask from './work/WorkTask'

export default function Tasks() {
	const setActive = ({ isActive }) =>
		isActive ? 'p-2 m-2 rounded-lg bg-main' : 'p-2 m-2'

	return (
		<div>
			<div className='flex gap-6 border-b-2'>
				<NavLink className={setActive} to='make'>
					make
				</NavLink>
				<NavLink className={setActive} to='work'>
					to work
				</NavLink>
				<NavLink className={setActive} to='ready'>
					ready
				</NavLink>
				<NavLink className={setActive} to='add'>
					+
				</NavLink>
			</div>
			<div>
				<Routes>
					<Route index element={<div>Task manager info </div>} />
					<Route path='make' element={<MakeTask />} />
					<Route path='work' element={<WorkTask />} />
					<Route path='ready' element={<ReadyTask />} />
					<Route path='add' element={<AddTask />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}
