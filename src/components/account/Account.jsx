import style from './Account.module.scss'
import InfoBlock from './InfoBlock/InfoBlock'
import NavBlock from './navBlock/NavBlock'

export default function Account() {
	return (
		<div className={style.containerAccount}>
			<div className={style.navBlock}>
				<NavBlock />
			</div>
			<div className={style.infoBlock}>
				<InfoBlock />
			</div>
		</div>
	)
}
