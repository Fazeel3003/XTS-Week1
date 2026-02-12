const todo = {
    tasks: [],  // This will be loaded from local storage on start

    // Save tasks to local storage
    saveTasks: function() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    },

    // Load tasks from local storage
    loadTasks: function() {
        const stored = localStorage.getItem('todoTasks');
        if (stored) {
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
        this.saveTasks();  // Persist after adding
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
        this.saveTasks();  // Persist after marking done
        console.log(`Task ${id} marked as done.`);
    },

    //  Edit a task's text by ID
    edit: function(id, newText) {
        id = parseInt(id);
        if (isNaN(id) || id < 1 || id > this.tasks.length) {
            console.log('Error: Invalid task ID. Usage: todo.edit(id, "new text") where id is a number.');
            return;
        }
        if (!newText || typeof newText !== 'string') {
            console.log('Error: Provide a valid new task description. Usage: todo.edit(id, "new text")');
            return;
        }
        this.tasks[id - 1].text = newText;
        this.saveTasks();  // Persist after editing
        console.log(`Task ${id} updated: ${newText}`);
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
        this.saveTasks();  // Persist after deleting
        console.log(`Task deleted: ${removed[0].text}. Tasks renumbered.`);
    },

    // Search tasks by keyword (case-insensitive)
    search: function(keyword) {
        if (!keyword || typeof keyword !== 'string') {
            console.log('Error: Provide a valid search keyword. Usage: todo.search("keyword")');
            return;
        }
        const matches = this.tasks.filter(task =>
            task.text.toLowerCase().includes(keyword.toLowerCase())
        );
        if (matches.length === 0) {
            console.log(`No tasks found matching "${keyword}".`);
            return;
        }
        // Prepare and display matching tasks in a table
        const tableData = matches.map(task => ({
            ID: task.id,
            Task: task.text,
            Status: task.done ? 'Done' : 'Pending'
        }));
        console.log(`Found ${matches.length} task(s) matching "${keyword}":`);
        console.table(tableData);
    },

    // Show stats summary (total, done, pending)
stats: function() {
    try {
        const total = this.tasks.length;
        // Explicitly check for done === true to avoid issues with non-boolean values
        const done = this.tasks.filter(task => task.done === true).length;
        const pending = total - done;
        console.log(`Task Stats: Total: ${total}, Done: ${done}, Pending: ${pending}`);
    } catch (error) {
        console.log('Error in stats():', error.message);
    }
},
    clear: function() {
        this.tasks = [];
        this.saveTasks();  // Persist after clearing (saves empty array)
        console.log('All tasks cleared.');
    },

    help: function() {
        console.log('Console TODO App Commands:');
        console.log('  todo.add("task text")       - Add a new task');
        console.log('  todo.list()                 - List all tasks in a table');
        console.log('  todo.done(id)               - Mark task as done (id is a number)');
        console.log('  todo.edit(id, "new text")   - Edit a task\'s text (id is a number)');
        console.log('  todo.search("keyword")      - Search tasks by keyword');
        console.log('  todo.stats()                - Show task statistics');
        console.log('  todo.delete(id)             - Delete a task and renumber remaining (id is a number)');
        console.log('  todo.clear()                - Clear all tasks');
        console.log('  todo.help()                 - Show this help');
        console.log('Example: todo.add("Buy milk"); todo.list(); todo.edit(1, "Buy almond milk"); todo.search("milk");');
    }
};

// Auto-load tasks from local storage when the script runs
todo.loadTasks();

console.log('TODO App loaded! Type todo.help() for commands.');