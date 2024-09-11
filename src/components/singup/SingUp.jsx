import { useNavigate } from 'react-router-dom'

export default function SingUp() {
	const navigate = useNavigate()

	const goBack = () => navigate(-1)

	return (
		<div>
			<div className='text-center m-10'>Sing Up</div>
			<div className='text-center'>
				<button className='border rounded-lg m-10 p-10' onClick={goBack}>
					Back
				</button>
			</div>
		</div>
	)
}
