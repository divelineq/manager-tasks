import ItemTask from '../ItemTask'
import style from './Make.module.scss'

export default function MakeTask() {
	return (
		<div className={style.containerMakeTasks}>
			<ItemTask />
		</div>
	)
}
