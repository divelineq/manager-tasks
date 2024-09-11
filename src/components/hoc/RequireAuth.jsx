import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth() {
	const location = useLocation()
	const auth = false

	console.log(location, auth)

	if (!auth) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return <div>children</div>
}
