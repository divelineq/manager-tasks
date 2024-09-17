import style from './Chat.module.scss'

export default function Chat() {
	return (
		<div className={style.containerChat}>
			<img className={style.imgChat} src='/public/profile.png' alt='icon' />
			<div className={style.divChatMes}>
				<p className={style.pNAme}>Имя Фамилия</p>
				<p className={style.pMessage}>Сообщение</p>
			</div>
		</div>
	)
}
