import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todo: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todo.push(action.payload)
		},
		// removeTodo: (state, action) => {},
		// toggleTodo: (state, action) => {},
	},
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
