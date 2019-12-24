export const CREATE_DESK = 'CREATE_DESK';

export function createDesk(desk) {
    alert(1);
    return {
        type: CREATE_DESK,
        payload: desk
    }
}
