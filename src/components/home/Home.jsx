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
						<button>Login</button>
					</Link>
					<Link className={style.buttons} to='/singup'>
						<button>Sing up</button>
					</Link>
				</div>
			</div>
			<div className={style.containerInfoBlock}>
				<div className={style.infoBlock}>
					<img className={style.imgPost} src='./img/1post.png' alt='img' />
					<div>text 1</div>
				</div>
				<div className={style.infoBlock}>
					<div>text 2</div>
					<img className={style.imgPost} src='./img/2post.png' alt='img' />
				</div>
				<div className={style.infoBlock}>
					<img className={style.imgPost} src='./img/3post.png' alt='img' />
					<div>text 3</div>
				</div>
			</div>
			<div className='text-center border rounded-lg p-5 hover:bg-main transition-color '>
				<h1>start</h1>
			</div>
		</div>
	)
}
