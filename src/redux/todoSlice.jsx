import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		text: '',
		todos: [],
	},
	reducers: {
		todoText: (state, action) => {
			state.text = action.payload
		},
		addTodo: (state, action) => {
			state.todos.push({
				work: false,
				ready: false,
				make: true,
				title: action.payload,
				isComlite: false,
				id: new Date().getTime(),
				date: {
					day: new Date().getDay(),
					month: new Date().getMonth(),
					year: new Date().getFullYear(),
				},
			})
			state.text = ''
		},
	},
})

export const { addTodo, todoText } = todoSlice.actions
export default todoSlice.reducer
