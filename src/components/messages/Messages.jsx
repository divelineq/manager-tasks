import { useSelector } from 'react-redux'
import style from './Messages.module.scss'
import Chat from './chat/Chat'
import Message from './message/Message'

export default function Messages() {
	const profile = useSelector((state) => state.profile)
	console.log(profile)

	return (
		<div className={style.containerMessages}>
			<div className={style.messagesChat}>
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
			</div>
			<div className={style.messageWindow}>
				<div className={style.messageWindowTop}>
					<div className={style.username}>
						<p>{profile.name}</p>
						<p>{profile.lastname}</p>
					</div>
					<div>
						<img src='/public/profile.png' alt='avatar' />
					</div>
				</div>
				<ul className={style.messageMain}>
					<Message />
					<Message />
					<Message />
					<Message />
				</ul>
				<form className={style.messageSend}>
					<button className={style.moreSend}>
						<img className={style.imgMore} src='/public/mess.png' alt='mess' />
					</button>
					<input
						className={style.messageSendInput}
						type='text'
						placeholder='Новое сообщение'
					/>
					<button className={style.messageSendButton}>
						<img className={style.imgSend} src='/public/send.png' alt='send' />
					</button>
				</form>
			</div>
		</div>
	)
}
