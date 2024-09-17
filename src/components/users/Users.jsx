import User from './user/User'
import style from './Users.module.scss'

export default function Users() {
	return (
		<div className={style.containerUsers}>
			<div className={style.inputDiv}>
				<input type='text' placeholder='Поиск' />
			</div>
			<div className={style.groupDiv1}>
				<div className={style.groupName}>
					<h2>Группа 1</h2>
					<h2>Направление 2</h2>
				</div>
				<div className={style.mapUser}>
					<User />
					<User />
					<User />
				</div>
			</div>
			<div className={style.groupDiv2}>
				<div className={style.groupName}>
					<h2>Группа 2</h2>
					<h2>Направление 4</h2>
				</div>
				<div className={style.mapUser}>
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
				</div>
			</div>
		</div>
	)
}
