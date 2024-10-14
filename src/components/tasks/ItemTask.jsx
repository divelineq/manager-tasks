import {
	AiOutlineBranches,
	AiOutlineCheck,
	AiOutlineEdit,
} from 'react-icons/ai'
import { CiTrash } from 'react-icons/ci'
import style from './ItemTask.module.scss'

export default function ItemTask({ todos }) {
	return (
		<div className={style.makeTasks}>
			<div className={style.task}>
				<div className={style.profile}>
					<p>icon</p>
					<p>Имя</p>
					<p>Фамилия</p>
				</div>
				<div className={style.text}>
					<p>{todos.title.nameTask}</p>
					<p>Приоритет: {todos.title.priority}</p>
				</div>
				<div className={style.date}>
					<button>
						<AiOutlineEdit />
					</button>
					<button>
						<AiOutlineBranches />
					</button>
					<button>
						<AiOutlineCheck />
					</button>
					<button>
						<CiTrash />
					</button>
					<p>
						{todos.date.day}.{todos.date.month}.{todos.date.year}
					</p>
				</div>
			</div>
		</div>
	)
}
