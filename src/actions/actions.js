export const CREATE_DESK = 'CREATE_DESK';
export const DELETE_ALL = 'DELETE_ALL';

export function createDesk(desk){
    return {
        type: CREATE_DESK,
        desk
    };
}

export function deleteAll(){
    return {
        type: DELETE_ALL
    };
}
