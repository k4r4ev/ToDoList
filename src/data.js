class Data {
    constructor() {
        this.storage = {};
        this.createDesk = this.createDesk.bind(this);
        if (localStorage.length === 0) {
            this.maxDeskOrder = 0;
            this.storage.desks = [];
            this.createDesk();
        } else {
            this.storage = JSON.parse(localStorage.getItem('storage'));
            this.maxDeskOrder = this.storage.desks.length;
        }
    }

    saveToLocalStorage = () => {
        localStorage.removeItem('storage');
        localStorage.setItem('storage', JSON.stringify(this.storage));
    };

    deleteAll = () => {
        this.storage = {};
        this.maxDeskOrder = 0;
        this.storage.desks = [];
        this.createDesk();
        this.saveToLocalStorage();
    };

    createDesk = (name = "Desk", tasks = [{name: "Task #1", completed: false}]) => {
        this.storage.desks.push({name: name, order: this.maxDeskOrder, tasks: []});
        for (let i in tasks) {
            this.createTask(this.maxDeskOrder, tasks[i]);
        }
        this.saveToLocalStorage();
        this.maxDeskOrder++;
    };

    deleteDesk = (deskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                this.storage.desks.splice(i, 1);
                this.saveToLocalStorage();
            }
        }
    };

    createTask = (deskOrder, taskObj = {name: "Task #1", completed: false}) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                this.storage.desks[i].tasks.push(taskObj);
            }
        }
        this.saveToLocalStorage();
    };

    deleteTask = (deskOrder, taskName) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                    if (this.storage.desks[i].tasks[j].name === taskName) {
                        this.storage.desks[i].tasks.splice(j, 1);
                        this.saveToLocalStorage();
                        break;
                    }
                }
            }
        }
    };
}

export default Data;
