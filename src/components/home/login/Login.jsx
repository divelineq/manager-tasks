import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../../redux/loginSlice'
import style from './Login.module.scss'

export default function Register() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const onSubmit = (data) => {
		dispatch(setLogin(data))
		goBack()
	}

	return (
		<div className={style.loginContainer}>
			<div className={style.loginText}>Вход</div>
			<form className={style.loginForm} action='login'>
				<input
					{...register('email', {
						required: 'Mail обязателен',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Неверный mail',
						},
					})}
					type='email'
					placeholder='Mail'
				/>
				<input
					{...register('password', { required: true })}
					type='password'
					placeholder='Пароль'
				/>
				<button className={style.loginButton} onClick={handleSubmit(onSubmit)}>
					Войти
				</button>
			</form>
			<button className={style.loginBackButton} onClick={goBack}>
				Назад
			</button>
		</div>
	)
}
