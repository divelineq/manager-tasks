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
						{profileState.online ? (
							<div className={style.online}>●</div>
						) : (
							<div className={style.offline}>●</div>
						)}
						<img src='/public/profile.png' alt='icon' />
					</div>
					<div className={style.mainInfo}>
						<p>{profileState.email}</p>
						<p>Организация</p>
					</div>
				</div>
				<div className={style.rightInfoProfile}>
					<div className={style.topRightInfo}>
						<div>
							<p>{profileState.name} {profileState.lastname}</p>
						</div>
						<div>
							<button onClick={() => dispatch(toggleModal())}>
								<img src='../../../public/editProfile.png' alt='edit' />
							</button>
						</div>
					</div>
					<hr className={style.horizontalLine}></hr>
					<div className={style.bottomRightInfo}>
						<div className={style.info}>
							<ul className={style.titles}>
								<li>Группа:</li>
								<li>Должность:</li>
								<li>День рождения:</li>
								<li>Дата регистрации:</li>
							</ul>
							<ul className={style.values}>
								<li>Веб-разработка</li>
								<li>frontend developer</li>
								<li>01.02.2000</li>
								<li>04.09.2024</li>
							</ul>
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
					<div className={style.info}>
						<img src='/public/ach.png' alt='icon' />
						<p>5 выполненных задач</p>
						<p>Выполните 5 задач</p>
					</div>
					<p>14.11.2024 18:36</p>
				</div>
				<div className={style.achivDiv}>
					<div className={style.info}>
						<img src='/public/ach.png' alt='icon' />
						<p>25 выполненных задач</p>
						<p>Выполните 25 задач</p>
					</div>
					<p>14.11.2024 18:36</p>
				</div>
				<div className={style.achivDiv}>
					<div className={style.info}>
						<img src='/public/ach.png' alt='icon' />
						<p>50 выполненных задач</p>
						<p>Выполните 50 задач</p>
					</div>
					<p>14.11.2024 18:36</p>
				</div>
			</div>
			<EditModal />
		</div>
	)
}
