import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		email: null,
		password: null,
	},
	reducers: {
		setLogin: (state, { payload }) => {
			state.email = payload.email
			state.password = payload.password
		},
	},
})

export const { setLogin } = loginSlice.actions

export default loginSlice.reducer
