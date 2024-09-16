import { createSlice } from '@reduxjs/toolkit'

const loginState = {
	email: null,
	password: null,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState: loginState,
	reducers: {
		getLogin: (state, action) => {
			console.log('login sate', state, action)
		},
	},
})

export const { getLogin } = loginSlice.actions

export default loginSlice.reducer
