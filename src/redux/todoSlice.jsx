import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		priority: null,
		todos: [],
		oneTodo: {},
		workTodos: [],
		readyTodos: [],
	},
	reducers: {
		addTodos: (state, action) => {
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
		addTodo: (state, action) => {
			state.oneTodo = action.payload
		},
		priority: (state, action) => {
			state.priority = action.payload
		},
		workTodo: (state, action) => {
			state.workTodos = action.payload
		},
		readyTodo: (state, action) => {
			state.readyTodos = action.payload
		},
	},
})

export const { addTodos, priority, workTodo, readyTodo, addTodo } =
	todoSlice.actions
export default todoSlice.reducer
