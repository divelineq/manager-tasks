import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		priority: null,
		todos: [],
	},
	reducers: {
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
		},
		priority: (state, action) => {
			state.priority = action.payload
		},
	},
})

export const { addTodo, priority } = todoSlice.actions
export default todoSlice.reducer
