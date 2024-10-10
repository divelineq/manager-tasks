import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTodo, todoText } from '../../../redux/todoSlice'
import style from './AddTask.module.scss'

export default function AddTask() {
	const text = useSelector((state) => state.todo.text)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const addTodoTask = () => {
		dispatch(addTodo(text))
		navigate('/account/tasks')
	}

	return (
		<div className={style.containerAddTask}>
			<div className={style.header}>
				<p>Добавить задачу</p>
				<div className={style.priority}>
					<p>Выберите приоритет:</p>
					<select
						name='priority'
						onChange={(e) => {
							console.log(e.target.value)
						}}
					>
						<option value='easy'>Низкий</option>
						<option value='medium'>Средний</option>
						<option value='hard'>Высокий</option>
						<option value='veryHard'>Наивысший</option>
					</select>
				</div>

				<div>Дата</div>
			</div>
			<div className={style.nameTask}>
				<input type='text' placeholder='Название' />
			</div>
			<div className={style.descriptionTask}>
				<input
					type='text'
					value={text}
					placeholder='Введите текст'
					onChange={(e) => dispatch(todoText(e.target.value))}
				/>
			</div>
			<div className={style.buttonAddTask}>
				<button onClick={() => addTodoTask()}>Добавить</button>
			</div>
		</div>
	)
}
