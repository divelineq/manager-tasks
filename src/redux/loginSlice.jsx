import { createSlice } from '@reduxjs/toolkit'

const loginState = {
	email: null,
	password: null,
	bitok: null,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState: loginState,
	reducers: {
		getLogin: (state, action) => {
			console.log('login sate', state, action)
		},
		getBytok: (state, action) => {
			;[...state, action.payload]
		},
	},
})

export const { getLogin } = loginSlice.actions

export default loginSlice.reducer
