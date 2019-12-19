class Data {
    constructor() {
        this.storage = {};
        this.deskNumber = 0;
        this.createDesk = this.createDesk.bind(this);
        if (localStorage.length === 0) {
            this.storage.desks = [];
            this.createDesk();
        } else {
            this.storage = JSON.parse(localStorage.getItem('storage'));
        }
    }

    saveToLocalStorage = () => {
        localStorage.removeItem('storage');
        localStorage.setItem('storage', JSON.stringify(this.storage));
    };

    deleteAll = () => {
        this.storage = {};
        this.deskNumber = 0;
        this.storage.desks = [];
        this.createDesk();
        this.saveToLocalStorage();
    };

    createDesk = (name = "Desk", tasks = [{name: "Task #1", completed: false}]) => {
        this.storage.desks.push({name: name, tasks: [], order: this.deskNumber});
        for (let i in tasks) {
            this.createTask(this.deskNumber, tasks[i]);
        }
        this.saveToLocalStorage();
        this.deskNumber++;
    };

    deleteDesk = (deskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                this.storage.desks.splice(i, 1);
                this.saveToLocalStorage();
            }
        }
        this.deskNumber--;
    };

    createTask = (deskOrder, taskName = "task") => {
        this.storage.desks[deskOrder].tasks.push(taskName);
        this.saveToLocalStorage();
    };

    deleteTask = (deskOrder, taskName) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                    if (this.storage.desks[i].tasks.name === taskName) {
                        this.storage.desks[i].tasks.splice(j, 1);
                        this.saveToLocalStorage();
                    }
                }
            }
        }
    };
}

export default Data;
