import style from './User.module.scss'

export default function User() {
	return (
		<div className={style.containerUser}>
			<img className={style.imgUser} src='/public/profile.png' alt='icon' />
			<p>Имя</p>
			<p>Фамилия</p>
			<p>Работа</p>
		</div>
	)
}
