export const CREATE_DESK = 'CREATE_DESK';

export function createDesk(desks) {
    alert(1);
    localStorage.removeItem('storage');
    let storage = {};
    storage.desks = desks;
    localStorage.setItem('storage', JSON.stringify(storage));
    return {
        type: CREATE_DESK,
        payload: desks
    }
}
