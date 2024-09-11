import { useDispatch, useSelector } from 'react-redux'
import style from './EditModal.module.scss'
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import {
	reemail,
	relastname,
	rename,
	repasswd,
	toggleModal,
} from '../../../redux/profile/profileSlice'

export default function EditModal() {
	const profileState = useSelector((state) => state.profile)
	const dispatch = useDispatch()
	const { register, handleSubmit, formState } = useForm({
		mode: 'onChange',
		defaultValues: {
			email: profileState.email,
			password: profileState.password,
			name: profileState.name,
			lastname: profileState.lastname,
		},
	})

	const onSubmit = (data) => {
		dispatch(rename(data.name))
		dispatch(relastname(data.lastname))
		dispatch(reemail(data.email))
		dispatch(repasswd(data.password))
	}

	const editToggle = profileState.modal
		? 'fixed top-0 left-0 w-full h-full flex items-center justify-center '
		: 'hidden fixed top-0 left-0 w-full h-full flex items-center justify-center'

	const emailError = formState.errors['email']?.message
	const passwordError = formState.errors['password']?.message
	return (
		<div className={editToggle}>
			<div className={style.container}>
				<button onClick={() => dispatch(toggleModal())}>X</button>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='text-center'>
						<p>Редактирование</p>
					</div>
					<div>
						<input
							{...register('name')}
							className={style.input}
							type='text'
							placeholder='Имя'
						/>
						<input
							{...register('lastname')}
							className={style.input}
							type='text'
							placeholder='Фамилия'
						/>
					</div>
					<div>
						<input
							{...register('email', {
								required: 'Mail обязателен',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Неверный mail',
								},
							})}
							className={style.input}
							type='mail'
							placeholder='Эл.почта'
						/>
						<input
							{...register('password', {
								required: 'Пароль обязателен',
							})}
							className={style.input}
							type='password'
							placeholder='Новый пароль'
						/>
					</div>
					<div className={style.divButtonInputForm}>
						<button
							onClick={() => dispatch(toggleModal())}
							className={style.buttonInputForm}
							type='submit'
						>
							Изменить
						</button>
						<span className={style.divErrorMessages}>
							<div className={style.errorText}>{emailError}</div>
							<div className={style.errorText}>{passwordError}</div>
						</span>
					</div>
				</form>
			</div>
			<div className={style.absoluteContainer}></div>
		</div>
	)
}
