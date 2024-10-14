import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTodos } from '../../../redux/todoSlice'
import style from './AddTask.module.scss'

export default function AddTask() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})

	const onSubmit = (data) => {
		dispatch(addTodos(data))
		navigate('/account/tasks')
	}

	return (
		<form className={style.containerAddTask}>
			<div className={style.header}>
				<p>Добавить задачу</p>
				<div className={style.priority}>
					<p>Выберите приоритет:</p>
					<select
						name='priority'
						{...register('priority', {
							required: true,
						})}
					>
						<option value='Низкий'>Низкий</option>
						<option value='Средний'>Средний</option>
						<option value='Высокий'>Высокий</option>
						<option value='Наивысший'>Наивысший</option>
					</select>
				</div>
				<div>Дата</div>
			</div>
			<div className={style.nameTask}>
				<input
					{...register('nameTask', {
						required: 'Название обязательно',
					})}
					type='text'
					placeholder='Название'
				/>
			</div>
			<div className={style.descriptionTask}>
				<input
					{...register('descriptionTask', {
						required: 'Описание обязательно',
					})}
					type='text'
					placeholder='Введите текст'
				/>
			</div>
			<div className={style.buttonAddTask}>
				<button onClick={handleSubmit(onSubmit)}>Добавить</button>
			</div>
		</form>
	)
}
