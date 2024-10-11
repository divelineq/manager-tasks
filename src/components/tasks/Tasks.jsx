import { NavLink, Route, Routes } from 'react-router-dom'
import NotFound from '../notFound/NotFound'
import AddTask from './add/AddTask'
import MakeTask from './make/MakeTask'
import ReadyTask from './ready/ReadyTask'
import style from './Tasks.module.scss'
import WorkTask from './work/WorkTask'

export default function Tasks() {
	// const isComplite = () => {
	// 	if()
	// }
	return (
		<div className={style.containerTask}>
			<div className={style.navTasks}>
				<NavLink to=''>Сделать</NavLink>
				<NavLink to='work'>В работе</NavLink>
				<NavLink to='ready'>Готовые</NavLink>
				<NavLink className={style.addTask} to='add'>
					Добавить задачу
				</NavLink>
			</div>
			<div className={style.tasksDiv}>
				<Routes>
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
