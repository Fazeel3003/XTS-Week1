const todo = {
    tasks: [],
    saveTasks: function(){
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    },
    loadTasks: function(){
        const stored = localStorage.getItem('todoTasks');
        if(stored){
            this.tasks = JSON.parse(stored);
        }
    },

    add: function(text) {
        if (!text || typeof text !== 'string') {
            console.log('Error: Provide a valid task description. Usage: todo.add("task text")');
            return;
        }
        const id = this.tasks.length + 1;
        this.tasks.push({ id, text, done: false });
        console.log(`Task ${id} added: ${text}`);
    },

    list: function() {
        if (this.tasks.length === 0) {
            console.log('No tasks.');
            return;
        }
        // Prepare data for table: ID, Task, Status
        const tableData = this.tasks.map(task => ({
            ID: task.id,
            Task: task.text,
            Status: task.done ? 'Done' : 'Pending'
        }));
        console.table(tableData); // Displays as a table in the console
    },

    done: function(id) {
        id = parseInt(id);
        if (isNaN(id) || id < 1 || id > this.tasks.length) {
            console.log('Error: Invalid task ID. Usage: todo.done(id) where id is a number.');
            return;
        }
        this.tasks[id - 1].done = true;
        console.log(`Task ${id} marked as done.`);
    },

    delete: function(id) {
        id = parseInt(id);
        if (isNaN(id) || id < 1 || id > this.tasks.length) {
            console.log('Error: Invalid task ID. Usage: todo.delete(id) where id is a number.');
            return;
        }
        const removed = this.tasks.splice(id - 1, 1);
        // Renumber remaining tasks sequentially
        this.tasks.forEach((task, index) => {
            task.id = index + 1;
        });
        console.log(`Task deleted: ${removed[0].text}. Tasks renumbered.`);
    },

    clear: function() {
        this.tasks = [];
        console.log('All tasks cleared.');
    },

    help: function() {
        console.log('Console TODO App Commands:');
        console.log('  todo.add("task text")     - Add a new task');
        console.log('  todo.list()               - List all tasks in a table');
        console.log('  todo.done(id)             - Mark task as done (id is a number)');
        console.log('  todo.delete(id)           - Delete a task and renumber remaining (id is a number)');
        console.log('  todo.clear()              - Clear all tasks');
        console.log('  todo.help()               - Show this help');
        console.log('Example: todo.add("Buy milk"); todo.list(); todo.delete(1);');
    }
};

todo.loadTasks();
console.log('TODO App loaded! Type todo.help() for commands.');