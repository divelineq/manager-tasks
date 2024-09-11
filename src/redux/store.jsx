/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile/profileSlice.jsx'

export default configureStore({
	reducer: {
		profile: profileReducer,
	},
})
