export const initialState = (localStorage.length === 0) ? {
    desks: [{name: "desk", order: 0, tasks: [{name: "task", completed: false, order: 0}]}],
    maxDeskOrder: 1,
    maxTaskOrder: 1
} : JSON.parse(localStorage.getItem('storage'));

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_DESK':
            return {
                ...state, desks: [...state.desks, action.desk]
            };
        case 'DELETE_ALL':
            return {
                ...state, desks: [{name: "desk", order: 0, tasks: [{name: "task", completed: false, order: 0}]}]
            };
        default:
            return state
    }
}
