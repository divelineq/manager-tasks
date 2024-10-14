import { useSelector } from 'react-redux'
import ItemTask from '../ItemTask'
import style from './Make.module.scss'

export default function MakeTask() {
	const todos = useSelector((state) => state.todo.todos)

	return (
		<div className={style.containerMakeTasks}>
			{todos.map((el) => (
				<ItemTask key={el.id} todos={el} />
			))}
		</div>
	)
}
