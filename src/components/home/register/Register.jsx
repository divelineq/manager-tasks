import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setRegister } from '../../../redux/registerSlice'
import style from './Register.module.scss'

export default function Register() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const onSubmit = (data) => {
		dispatch(setRegister(data))
		goBack()
	}

	return (
		<div className={style.registerContainer}>
			<div className={style.registerText}>Регистрация</div>
			<form className={style.registerForm} action='register'>
				<input
					{...register('name', { required: true })}
					type='name'
					placeholder='Имя'
				/>
				<input
					{...register('lastname', { required: true })}
					type='lastname'
					placeholder='Фамилия'
				/>
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
				<input
					{...register('refCode', { required: true })}
					type='refcode'
					placeholder='Реферальный код'
				/>
				<button
					className={style.registerButton}
					onClick={handleSubmit(onSubmit)}
				>
					Зарегестрироваться
				</button>
			</form>
			<button className={style.registerBackButton} onClick={goBack}>
				Back
			</button>
		</div>
	)
}
