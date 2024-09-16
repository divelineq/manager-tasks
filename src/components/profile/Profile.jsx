import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/profileSlice'
import EditModal from './editModal/editModal'
import style from './Profile.module.scss'

export default function Profile() {
	const profileState = useSelector((state) => state.profile)
	const dispatch = useDispatch()
	console.log(profileState)

	return (
		<div className={style.container}>
			<div className={style.infoProfile}>
				<div className={style.leftInfoProfile}>
					<div className={style.imgProfile}>
						<img src='/public/profile.png' alt='icon' />
					</div>
					<div className={style.mainInfo}>
						<p>{profileState.email}</p>
						<p>Организация</p>
						<p>Группа</p>
						{profileState.online ? (
							<div className={style.online}>online</div>
						) : (
							<div className={style.offline}>offline</div>
						)}
					</div>
				</div>
				<div className={style.rightInfoProfile}>
					<div className={style.topRightInfo}>
						<div>
							<p>{profileState.name}</p>
							<p>{profileState.lastname}</p>
						</div>
						<div>
							<button onClick={() => dispatch(toggleModal())}>
								<img src='../../../public/editProfile.png' alt='edit' />
							</button>
						</div>
					</div>
					<div className={style.bottomRightInfo}>
						<div>
							<div>Должность: frontend developer</div>
							<div>День рождения: 01.02.2000</div>
							<div>Дата регистрации: 04.09.2024</div>
						</div>
						<div>
							<div>График</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.lvlDiv}>
				<p>Уровень 1 (800 / 1000) </p>
				<div className={style.progressLvl}>
					<div className={style.lineLvl}></div>
				</div>
				<div className={style.tierLvlUsers}>
					<p>8 место в организации</p>
					<p>2 место в группе</p>
					<p>1 место в направлении</p>
				</div>
			</div>
			<div className={style.achievementContainer}>
				<div className={style.achivDiv}>
					<img src='/public/ach.png' alt='icon' />
					<p>Выполните 5 задач</p>
					<p>14.11.2024 18:36</p>
				</div>
				<div className={style.achivDiv}>
					<img src='/public/ach.png' alt='icon' />
					<p>Выполните 25 задач</p>
					<p>8.12.2024 12:37</p>
				</div>
				<div className={style.achivDiv}>
					<img src='/public/ach.png' alt='icon' />
					<p>Выполните 100 задач</p>
					<p>13.9.2024 14:36</p>
				</div>
			</div>
			<EditModal />
		</div>
	)
}
