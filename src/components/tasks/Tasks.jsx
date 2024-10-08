import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { addTodo, todoText } from '../../redux/todoSlice'
import NotFound from '../notFound/NotFound'
import AddTask from './add/AddTask'
import MakeTask from './make/MakeTask'
import ReadyTask from './ready/ReadyTask'
import style from './Tasks.module.scss'
import WorkTask from './work/WorkTask'

export default function Tasks() {
	const text = useSelector((state) => state.todo.text)

	const dispatch = useDispatch()
	return (
		<div className={style.containerTask}>
			<div className={style.navTasks}>
				<Link to=''>Сделать</Link>
				<NavLink to='work'>В работе</NavLink>
				<NavLink to='ready'>Готовые</NavLink>
				<NavLink to='add'>+</NavLink>
			</div>
			<div className={style.tasksDiv}>
				<Routes>
					{/* <Route index element={<div>Task manager info </div>} /> */}
					<Route index element={<MakeTask />} />
					<Route path='work' element={<WorkTask />} />
					<Route path='ready' element={<ReadyTask />} />
					<Route path='add' element={<AddTask />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<input
					type='text'
					value={text}
					placeholder='Введите текст'
					onChange={(e) => dispatch(todoText(e.target.value))}
				/>
				<button onClick={() => dispatch(addTodo(text))}>Отправить</button>
			</div>
		</div>
	)
}
