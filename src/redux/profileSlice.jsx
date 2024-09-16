import { createSlice } from '@reduxjs/toolkit'

const profileState = {
	name: 'Иван',
	lastname: 'Иванов',
	email: 'mail@mail.ru',
	password: 'qwerty123',
	modal: false,
	online: true,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState: profileState,
	reducers: {
		rename: (state, action) => {
			state.name = action.payload
		},
		relastname: (state, action) => {
			state.lastname = action.payload
		},
		reemail: (state, action) => {
			state.email = action.payload
		},
		repasswd: (state, action) => {
			state.password = action.payload
		},
		toggleOnline: (state) => {
			state.online = !state.online
		},
		toggleModal: (state) => {
			state.modal = !state.modal
		},
	},
})

export const {
	rename,
	relastname,
	reemail,
	repasswd,
	toggleModal,
	toggleOnline,
} = profileSlice.actions

export default profileSlice.reducer
