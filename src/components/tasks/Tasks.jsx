import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, Routes } from 'react-router-dom'
import { workTodo } from '../../redux/todoSlice'
import NotFound from '../notFound/NotFound'
import AddTask from './add/AddTask'
import MakeTask from './make/MakeTask'
import ReadyTask from './ready/ReadyTask'
import style from './Tasks.module.scss'
import WorkTask from './work/WorkTask'

export default function Tasks() {
	const todos = useSelector((state) => state.todo.todos)
	const dispatch = useDispatch()

	function todoFilter(status) {
		if (status == 'work') {
			const workTodos = todos.filter((el) => el.work === true)
			dispatch(workTodo(workTodos))
		} else if (status == 'success') {
			const readyTodos = todos.filter((el) => el.work === true)
			dispatch(readyTodos(readyTodos))
		}
	}
	return (
		<div className={style.containerTask}>
			<div className={style.navTasks}>
				<NavLink to=''>Сделать</NavLink>
				<NavLink to='work' onClick={() => todoFilter('work')}>
					В работе
				</NavLink>
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
