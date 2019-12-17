class Data {
    constructor() {
        this.storage = {};
        this.createDesk = this.createDesk.bind(this);
        if (localStorage.length === 0) {
            this.storage.desks = [];
            this.createDesk();
        } else {
            this.storage = JSON.parse(localStorage.getItem('storage'));
        }
    }

    saveStorage() {
        localStorage.removeItem('storage');
        localStorage.setItem('storage', JSON.stringify(this.storage));
    }

    createDesk(name = "Desk #" + (this.storage.desks.length + 1), tasks = ["Task #1", "Task #2"]) {
        this.storage.desks.push({name, tasks});
    }
}

export default Data;
