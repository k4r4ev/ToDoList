class Data {
    constructor() {
        this.storage = {};
        if (localStorage.length === 0) {
            this.storage.maxDeskOrder = 0;
            this.storage.maxTaskOrder = 0;
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
        this.storage.maxDeskOrder = 0;
        this.storage.maxTaskOrder = 0;
        this.storage.desks = [];
        this.createDesk();
        this.saveToLocalStorage();
    };

    createDesk = (name = "Desk", tasks = [{name: "task", completed: false}]) => {
        this.storage.desks.push({name: name, order: this.storage.maxDeskOrder, tasks: []});
        for (let i in tasks) {
            tasks[i].order = this.storage.maxTaskOrder;
            this.createTask(this.storage.maxDeskOrder, tasks[i]);
        }
        this.storage.maxDeskOrder++;
        this.saveToLocalStorage();
    };

    deleteDesk = (deskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                this.storage.desks.splice(i, 1);
                this.saveToLocalStorage();
            }
        }
    };

    createTask = (deskOrder, taskObj = {name: "task", completed: false}) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                taskObj.order = this.storage.maxTaskOrder;
                this.storage.desks[i].tasks.push(taskObj);
                this.storage.maxTaskOrder++;
            }
        }
        this.saveToLocalStorage();
    };

    completeTask = (deskOrder, taskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                    if (this.storage.desks[i].tasks[j].order === taskOrder) {
                        this.storage.desks[i].tasks[j].completed = true;
                        this.saveToLocalStorage();
                        break;
                    }
                }
            }
        }
    };

    deleteTask = (deskOrder, taskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                    if (this.storage.desks[i].tasks[j].order === taskOrder) {
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
