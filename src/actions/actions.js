export const CREATE_DESK = 'CREATE_DESK'
export const DELETE_ALL = 'DELETE_ALL'
export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_DESK = 'DELETE_DESK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const ADD_TO_DELETE_LIST = 'ADD_TO_DESK_IGNORE'
export const CLEAR_DELETE_LIST = 'CLEAR_DELETE_LIST'

export function createDesk (desk) {
    return {
        type: CREATE_DESK,
        desk
    }
}

export function deleteDesk (order) {
    return {
        type: DELETE_DESK,
        order
    }
}

export function deleteAll () {
    return {
        type: DELETE_ALL
    }
}

export function createTask (task) {
    return {
        type: CREATE_TASK,
        task
    }
}

export function deleteTask (order) {
    return {
        type: DELETE_TASK,
        order
    }
}

export function completeTask (order) {
    return {
        type: COMPLETE_TASK,
        order
    }
}

export function addToDeleteList (order) {
    return {
        type: ADD_TO_DELETE_LIST,
        order
    }
}

export function clearDeleteList () {
    return {
        type: CLEAR_DELETE_LIST
    }
}
