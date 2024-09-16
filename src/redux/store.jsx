/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice.jsx'
import profileReducer from './profileSlice.jsx'
import registerReducer from './registerSlice.jsx'
import todoReducer from './todoSlice.jsx'

export default configureStore({
	reducer: {
		profile: profileReducer,
		login: loginReducer,
		register: registerReducer,
		todo: todoReducer,
	},
})
