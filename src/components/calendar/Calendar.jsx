import SoloDate from './soloDate/SoloDate'

import style from './Calendar.module.scss'
export default function Calendar() {
	return (
		<div className={style.containerCalendar}>
			<div className={style.soloDate}>
				<button className={style.buttonNav}>
					<img src='/public/goBack.png' alt='back' />
				</button>
				<SoloDate />
				<SoloDate />
				<SoloDate />
				<SoloDate />
				<SoloDate />
				<button className={style.buttonNav}>
					<img src='/public/goNext.png' alt='next' />
				</button>
			</div>
			<div className={style.dateTasks}>
				<div>До конца спринта х дней</div>
				<div>События</div>
			</div>
		</div>
	)
}
