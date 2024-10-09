import { useSelector } from 'react-redux'
import style from './ItemTask.module.scss'

export default function ItemTask() {
	const todos = useSelector((state) => state.todo.todos)
	return (
		<div className={style.makeTasks}>
			{todos.map((el) => (
				<div className={style.task} key={el.id}>
					<div className={style.profile}>
						<p>icon</p>
						<p>Имя</p>
						<p>Фамилия</p>
					</div>
					<div className={style.mainText}>{el.title}</div>
					<div className={style.date}>
						<p>
							{el.date.day}.{el.date.month}.{el.date.year}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
