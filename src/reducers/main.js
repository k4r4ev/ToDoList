import { COMPLETE_TASK, CREATE_DESK, CREATE_TASK, DELETE_ALL, DELETE_DESK, DELETE_TASK } from '../actions/actions'

const initialState = (localStorage.length === 0) ? {
    desks: [{
        name: 'desk',
        order: 0,
        tasks: [{
            name: 'task',
            completed: false,
            order: 0
        }]
    }]
} : (JSON.parse(localStorage.getItem('storage')))

export function mainReducer (state = initialState, action) {
    switch (action.type) {
        case DELETE_ALL:
            return {
                ...state,
                desks: [{
                    name: 'desk',
                    order: 0,
                    tasks: [{
                        name: 'task',
                        completed: false,
                        order: 0
                    }]
                }]
            }
        case CREATE_DESK:
            return {
                ...state,
                desks: [...state.desks, action.desk]
            }
        case DELETE_DESK:
            return {
                ...state,
                desks: [...state.desks.filter(desk => desk.order !== action.order)]
            }
        case CREATE_TASK:
            return {
                ...state,
                desks: state.desks.map((desk) => {
                    if (desk.order === action.task.deskOrder) {
                        desk.tasks.push(action.task.taskObj)
                    }
                    return desk
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                desks: state.desks.map((desk) => {
                    desk.tasks.map((task, index) => {
                        if (task.order === action.order) {
                            desk.tasks.splice(index, 1)
                        }
                        return task
                    })
                    return desk
                })
            }
        case COMPLETE_TASK:
            return {
                ...state,
                desks: state.desks.map((desk) => {
                    desk.tasks.map((task) => {
                        if (task.order === action.order) {
                            task.completed = true
                        }
                        return task
                    })
                    return desk
                })
            }
        default:
            return state
    }
}
