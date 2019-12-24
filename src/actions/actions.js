export const CREATE_DESK = 'CREATE_DESK';

export function createDesk(desk){
    return {
        type: CREATE_DESK,
        desk
    };
}
