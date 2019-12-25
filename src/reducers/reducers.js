import {CREATE_DESK, DELETE_ALL, CREATE_TASK, DELETE_DESK, DELETE_TASK, COMPLETE_TASK} from '../actions/actions';

export const initialState = (localStorage.length === 0) ? {
    desks: [{name: "desk", order: 0, tasks: [{name: "task", completed: false, order: 0}]}]
} : JSON.parse(localStorage.getItem('storage'));

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DESK:
            return {
                ...state, desks: [...state.desks, action.desk]
            };
        case DELETE_ALL:
            return {
                ...state, desks: [{name: "desk", order: 0, tasks: [{name: "task", completed: false, order: 0}]}]
            };
        case DELETE_DESK:
            return {
                ...state, desks: [...state.desks.filter(desk => desk.order !== action.order)]
            };
        case CREATE_TASK:
            return {
                ...state, desks: state.desks.map((desk) => {
                    if (desk.order === action.task.deskOrder) {
                        desk.tasks.push(action.task.taskObj)
                    }
                    return desk;
                })
            };
        case DELETE_TASK:
            return {
                ...state, desks: state.desks.map((desk) => {
                    desk.tasks.map((task, index) => {
                        if (task.order === action.order) {
                            desk.tasks.splice(index, 1);
                        }
                    });
                    return desk;
                })
            };
        case COMPLETE_TASK:
            return {
                ...state, desks: state.desks.map((desk) => {
                    desk.tasks.map((task, index) => {
                        if (task.order === action.order) {
                            task.completed = true;
                        }
                    });
                    return desk;
                })
            };
        default:
            return state
    }
}
