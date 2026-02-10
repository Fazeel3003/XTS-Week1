# JavaScript Console TODO App
A simple, console-based TODO application built with vanilla JavaScript. This app allows you to manage tasks directly from your browser's developer console, with persistence using localStorage. No server or external dependencies required—just open the HTML file and start typing commands!
## Features
- **Add Tasks**: Create new tasks with a description.
- **List Tasks**: View all tasks in a neat console table, showing ID, task text, and status (Pending or Done).
- **Mark as Done**: Update a task's status to completed.
- **Edit Tasks**: Modify the text of an existing task.
- **Delete Tasks**: Remove a task and automatically renumber the remaining ones.
- **Search Tasks**: Find tasks by keyword (case-insensitive).
- **Clear All**: Wipe all tasks at once.
- **Help Command**: Get a quick reference of all available commands.
- **Persistence**: Tasks are saved to your browser's localStorage, so they persist across sessions.
## Technologies Used

- **JavaScript**: Core logic for task management.
- **HTML**: Basic structure to load the script.
- **localStorage**: For client-side data persistence (no database needed).

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with developer tools enabled.
- No installation required—it's a static web app!
### Installation
1. Clone or download this repository to your local machine:
git clone https://github.com/Fazeel3003/XTS-Week1
2. Navigate to the project folder and open 'index.html' in your web browser.
3. Open your browser's developer console:
- Press 'F12' or 'right-click' on the page and select "Inspect" > "Console" tab.
- You should see a message like "TODO App loaded! Type todo.help() for commands.
That's it! The app is now ready to use.
## Usage

Interact with the app by typing commands directly into the browser console. All commands are prefixed with `todo.` (e.g., `todo.add("Buy milk")`). Here's a quick guide:

### Available Commands
- `todo.add("task text")` - Add a new task.
- `todo.list()` - Display all tasks in a table.
- `todo.done(id)` - Mark a task as done (replace `id` with the task number).
- `todo.edit(id, "new text")` - Edit a task's description.
- `todo.search("keyword")` - Search for tasks containing the keyword.
- `todo.delete(id)` - Delete a task and renumber the rest.
- `todo.clear()` - Remove all tasks.
- `todo.help()` - Show a list of commands in the console.
### Examples
1. **Add a task**: todo.add("Buy groceries");
Output: `Task 1 added: Buy groceries`

2. **List all tasks**: todo.list();
Output: A table showing ID, Task, and Status.

3. **Mark a task as done**: todo.done(1);
Output: `Task 1 marked as done.`

4. **Edit a task**: todo.edit(1, "Buy organic groceries");
Output: `Task 1 updated: Buy organic groceries`

5. **Search for tasks**: todo.search("groceries");
Output: A table of matching tasks.

6. **Delete a task**: todo.delete(1);
Output: `Task deleted: Buy organic groceries. Tasks renumbered.`

7. **Clear all tasks**: todo.clear();
Output: `All tasks cleared.`

### Tips
- Task IDs are automatically assigned and renumbered after deletions.
- Tasks persist in your browser's localStorage, so they'll be there next time you open the page.
- If you encounter errors, check the console output for usage hints (e.g., invalid ID or missing text).
- This app is console-only—no GUI, so it's lightweight and great for quick task management.

## Contributing

Contributions are welcome! If you'd like to improve the app, feel free to:
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a description of your updates.

Please ensure your code follows basic JavaScript best practices and includes comments.

## License

This project is developed in affiliation with XTS Company. Licensing details are pending review by the company. Please contact [fmemon@xtsworld.com] or the company for usage permissions. (If open-sourced, it may use MIT License—check back for updates.)

## Acknowledgments

- Inspired by simple command-line TODO tools.
- Built as a fun, educational project to demonstrate JavaScript and localStorage.

