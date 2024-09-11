import { Route, Routes } from 'react-router-dom'
import Account from './components/account/Account'
import Home from './components/home/Home'
import Login from './components/login/Login'
import NotFound from './components/notFound/NotFound'
import SingUp from './components/singup/SingUp'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='account/*' element={<Account />} />
				<Route path='login' element={<Login />} />
				<Route path='singup' element={<SingUp />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
