import { Link } from 'react-router-dom'
import style from './Home.module.scss'

export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.autorizeDiv}>
				<div className={style.leftBlock}>
					<div className={style.iconDiv}>
						<img src='../../../public/favicon.svg' alt='icon' />
						<p>Manager Tasks</p>
					</div>
					<p className={style.iconText}>
						Мощный инструмент <br /> для эффективного <br /> менеджмента
					</p>
					<Link className={style.buttonAccount} to='/account'>
						<button>go to account</button>
					</Link>
				</div>
				<div className={style.rightBlock}>
					<h1 className='text-3xl'>Добро пожаловать!</h1>
					<Link className={style.buttons} to='/login'>
						<button>Вход</button>
					</Link>
					<Link className={style.buttons} to='/register'>
						<button>Регистрация</button>
					</Link>
				</div>
			</div>
			<div className={style.containerInfoBlock}>
				<div className={style.infoBlock}>
					<img className={style.imgPost} src='/public/1post.png' alt='img' />
					<div className={style.infoTextPost}>
						<h1>Удобный список задач</h1>
						<ul>
							<li>Контролируйте свое время с функцией отслеживания</li>
							<li>Меньше сложностей с организацией рабочего процесса</li>
							<li>Быстрый и удобный поиск</li>
							<li>Добавьте больше наглядности в работу</li>
							<li>Добавляйте задачи в один клик!</li>
						</ul>
					</div>
				</div>
				<div className={style.infoBlock}>
					<div className={style.infoTextPost}>
						<h1>Подробная инфромация</h1>
						<ul>
							<li>Обсуждайте идеи</li>
							<li>Распределяйте ответственностьа</li>
							<li>Повышайте эффективность</li>
						</ul>
					</div>
					<img className={style.imgPost} src='/public/2post.png' alt='img' />
				</div>
				<div className={style.infoBlock}>
					<img className={style.imgPost} src='/public/3post.png' alt='img' />
					<div className={style.infoTextPost}>
						<h1>Страница сотрудников</h1>
						<ul>
							<li>Назначайте задачи и следите за прогрессом</li>
							<li>Организуйте направления</li>
							<li>Получайте детальную информацию о проделанной работе</li>
						</ul>
					</div>
				</div>
				<div className={style.infoBlock}>
					<div className={style.infoTextPost}>
						<h1>Начните совершенно бесплатно!</h1>
						<p>
							Управляйте своими задачами сегодня с Manager Tasks — бесплатным и
							интуитивно понятным инструментом для вашей команды. Manager Tasks
							предоставляет вам все необходимые инструменты для планирования,
							отслеживания и выполнения задач. Присоединяйтесь к нашему
							сообществу уже сегодня и начните достигать новых высот в своей
							карьере!
						</p>
					</div>
					<img className={style.imgPost} src='' alt='video' />
				</div>
			</div>
			<div className={style.start}>
				<Link className={style.buttonAccount} to='/account'>
					<button>Начать</button>
				</Link>
			</div>
		</div>
	)
}
