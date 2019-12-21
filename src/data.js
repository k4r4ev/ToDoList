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
        return this.storage;
    };

    createDesk = (name = "Desk") => {
        this.storage.desks.push({name: name, order: this.storage.maxDeskOrder, tasks: []});
        this.storage.maxDeskOrder++;
        this.saveToLocalStorage();
        return this.storage;
    };

    deleteDesk = (deskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                this.storage.desks.splice(i, 1);
                this.saveToLocalStorage();
            }
        }
        return this.storage;
    };

    createTask = ({deskOrder, taskObj = {name: "task", completed: false}}) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            if (this.storage.desks[i].order === deskOrder) {
                taskObj.order = this.storage.maxTaskOrder;
                this.storage.desks[i].tasks.push(taskObj);
                this.storage.maxTaskOrder++;
            }
        }
        this.saveToLocalStorage();
        return this.storage;
    };

    completeTask = (taskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                if (this.storage.desks[i].tasks[j].order === taskOrder) {
                    this.storage.desks[i].tasks[j].completed = true;
                    this.saveToLocalStorage();
                    break;
                }
            }
        }
        return this.storage;
    };

    deleteTask = (taskOrder) => {
        for (let i = 0; i < this.storage.desks.length; i++) {
            for (let j = 0; j < this.storage.desks[i].tasks.length; j++) {
                if (this.storage.desks[i].tasks[j].order === taskOrder) {
                    this.storage.desks[i].tasks.splice(j, 1);
                    this.saveToLocalStorage();
                    break;
                }
            }
        }
        return this.storage;
    };
}

export default Data;
