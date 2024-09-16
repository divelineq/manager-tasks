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
		getRegister: (state, action) => {
			return [...state, action.payload]
		},
	},
})

export const { getRegister } = registerSlice.actions

export default registerSlice.reducer
