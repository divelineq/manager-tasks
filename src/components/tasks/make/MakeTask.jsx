import { useSelector } from 'react-redux'

export default function MakeTask() {
	const todos = useSelector((state) => state.todo.todos)
	console.log(todos)
	return (
		<div>
			{todos.map((el) => (
				<div key={el.key}>{el}</div>
			))}
		</div>
	)
}
