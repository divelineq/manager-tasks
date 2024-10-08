import { useSelector } from 'react-redux'
import style from './Make.module.scss'

export default function MakeTask() {
	const todos = useSelector((state) => state.todo.todos)
	return (
		<div className={style.makeTasks}>
			{todos.map((el) => (
				<div className={style.task} key={el.id}>
					{el.title}
				</div>
			))}
		</div>
	)
}
