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
				title: action.payload,
				isComlite: false,
				id: new Date().getTime(),
			})
			state.text = ''
		},
	},
})

export const { addTodo, todoText } = todoSlice.actions
export default todoSlice.reducer
