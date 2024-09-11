import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()
	const location = useLocation()

	const fromPage = location.state?.from?.pathname || '/'

	const goBack = () => navigate(-1)

	console.log(navigate, fromPage)
	return (
		<div>
			<div className='text-center m-10'>Login page</div>
			<div className='text-center'>
				<button onClick={goBack} className='border rounded-lg p-10 m-10'>
					Back
				</button>
			</div>
		</div>
	)
}
