# Student Record Manager

A simple command-line interface (CLI) application built in Python for managing student records. This project demonstrates basic CRUD operations (Create, Read, Update, Delete), data persistence using JSON files, and input validation. It's designed as a demo project to showcase Python fundamentals like lists, dictionaries, file I/O, and error handling.

## Features
- **Add Students**: Input student details (ID, name, age, grade) with duplicate ID checks.
- **View Students**: Display all records or filter by grade.
- **Search Students**: Find a student by ID.
- **Update Students**: Modify existing student details.
- **Delete Students**: Remove a student by ID.
- **Clear All Students**: Delete all records with confirmation.
- **Data Persistence**: Automatically loads from and saves to `data.json` on startup/exit.
- **Error Handling**: Validates inputs (e.g., numeric IDs/ages) and handles missing files gracefully.

## Requirements
- Python 3.x (tested on Python 3.8+)
- No external libraries required (uses built-in `json` and `os` modules)

## Installation
1. Clone or download the repository:
git clone <https://github.com/Fazeel3003/XTS-Week1/tree/main/python-student-manager>
2. Ensure Python is installed. Check with: python --version. 

## Usage
Run the application from the command line:
python student_manager.py
Follow the on-screen menu to interact with the app. Data is automatically saved to `data.json` in the same directory.

### Menu Options
- 1. Add Students
- 2. View Students (option to filter by grade)
- 3. Search Students
- 4. Update Student
- 5. Delete Student
- 6. Save Data (manual save)
- 7. Clear All Students
- 8. Exit (auto-saves data)

## Examples
1. **Adding a Student**:
   - Choose 1, enter ID: 1, Name: Alice, Age: 20, Grade: A.
   - Output: "Student added successfully!"

2. **Viewing with Filter**:
   - Choose 2, type 'y' for filter, enter Grade: A.
   - Displays only students with grade A.

3. **Searching**:
   - Choose 3, enter ID: 1.
   - Output: "Found: ID: 1, Name: Alice, Age: 20, Grade: A"

4. **Updating**:
   - Choose 4, enter ID: 1, update name to "Alice Johnson".
   - Output: "Student updated successfully!"

5. **Deleting**:
   - Choose 5, enter ID: 1.
   - Output: "Student deleted successfully!"

6. **Clearing All**:
   - Choose 7, confirm with 'y'.
   - Output: "All students cleared."

## Notes
- Data persists across sessions via `data.json`. If the file is missing or corrupted, the app starts with an empty list.
- For demo purposes, this app uses a simple list structure. For production, consider a database like SQLite.
- Tested on Windows/Linux/Mac. Ensure write permissions for the directory to save data.

## Contributing
Feel free to fork and submit pull requests for improvements (e.g., adding more fields or sorting options).

## License
This project is open-source and available under the MIT License. Use at your own risk.