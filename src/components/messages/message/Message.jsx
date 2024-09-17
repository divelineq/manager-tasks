import style from './Message.module.scss'

export default function Message() {
	return (
		<div className={style.containerMessage}>
			<p className={style.username}>Имя Фамилия</p>
			<p>Message</p>
		</div>
	)
}
