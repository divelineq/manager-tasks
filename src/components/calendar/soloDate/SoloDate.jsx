import style from './SoloDate.module.scss'

export default function SoloDate() {
	return (
		<div className={style.containerSoloDate}>
			<div className={style.datee}>25.06</div>
			<div className={style.main}>
				<p>
					Lorem Ipsum - это текст-рыба, часто используемый в печати и
					вэб-дизайне.
				</p>
				<p>
					Давно выяснено, что при оценке дизайна и композиции читаемый текст
					мешает сосредоточиться.
				</p>
				<p>
					Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
					набор слов, но это не совсем так.
				</p>
			</div>
		</div>
	)
}
