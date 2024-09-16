import { Link, NavLink, Route, Routes } from 'react-router-dom'
import NotFound from '../notFound/NotFound'
import AddTask from './add/AddTask'
import MakeTask from './make/MakeTask'
import ReadyTask from './ready/ReadyTask'
import WorkTask from './work/WorkTask'

export default function Tasks() {
	const setActive = ({ isActive }) => (isActive ? 'rounded-lg bg-main' : '')

	return (
		<div>
			<div className='flex gap-6 border-b-2'>
				<Link className={setActive} to=''>
					Сделать
				</Link>
				<NavLink className={setActive} to='work'>
					В работе
				</NavLink>
				<NavLink className={setActive} to='ready'>
					Готовые
				</NavLink>
				<NavLink className={setActive} to='add'>
					Добавить
				</NavLink>
			</div>
			<div>
				<Routes>
					{/* <Route index element={<div>Task manager info </div>} /> */}
					<Route index element={<MakeTask />} />
					<Route path='work' element={<WorkTask />} />
					<Route path='ready' element={<ReadyTask />} />
					<Route path='add' element={<AddTask />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}
