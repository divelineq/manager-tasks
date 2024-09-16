import { createSlice } from '@reduxjs/toolkit'

const registerState = {
	name: null,
	lastname: null,
	email: null,
	password: null,
}

export const registerSlice = createSlice({
	name: 'register',
	initialState: registerState,
	reducers: {
		setRegister: (state, { payload }) => {
			state.name = payload.name
			state.lastname = payload.lastname
			state.email = payload.email
			state.password = payload.password
		},
	},
})

export const { setRegister } = registerSlice.actions

export default registerSlice.reducer
