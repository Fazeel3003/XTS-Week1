import json
import os

# Global list to store student records
students = []

# Function to load data from file
def load_data():
    global students
    if os.path.exists("data.json"):
        with open("data.json", "r") as file:
            students = json.load(file)
        print("Data loaded from file.")

# Function to save data to file
def save_data():
    with open("data.json", "w") as file:
        json.dump(students, file, indent=4)
    print("Data saved to file.")

# Call load_data() at startup
load_data()

# Function to add a student
def add_student():
    try:
        student_id = int(input("Enter student ID: "))
        # Check if ID already exists (loop through list)
        for student in students:
            if student["id"] == student_id:
                print("Student ID already exists!")
                return
        name = input("Enter student name: ")
        age = int(input("Enter student age: "))
        grade = input("Enter student grade (e.g., A, B): ")
        # Create dictionary and add to list
        students.append({"id": student_id, "name": name, "age": age, "grade": grade})
        print("Student added successfully!")
    except ValueError:
        print("Invalid input! Please enter numbers for ID and age.")

# Function to view all students
def view_students():
    if not students:
        print("No students found!")
        return
    filter_choice = input("Filter by grade? (y/n): ").lower()
    if filter_choice == 'y':
        grade_filter = input("Enter grade to filter by (e.g., A, B): ").strip()
        filtered_students = [student for student in students if student["grade"].lower() == grade_filter.lower()]
        if not filtered_students:
            print(f"No students found with grade '{grade_filter}'.")
            return
        print(f"\nStudent Records (Filtered by Grade: {grade_filter}):")
        for student in filtered_students:
            print(f"ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Grade: {student['grade']}")
    else:
        print("\nStudent Records:")
        for student in students:
            print(f"ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Grade: {student['grade']}")

# Function to search student by ID
def search_student():
    try:
        student_id = int(input("Enter student ID to search: "))
        for student in students:
            if student["id"] == student_id:
                print(f"Found: ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Grade: {student['grade']}")
                return
        print("Student not found!")
    except ValueError:
        print("Invalid input! Please enter a number for ID.")

# Function to update a student
def update_student():
    try:
        student_id = int(input("Enter student ID to update: "))
        for student in students:
            if student["id"] == student_id:
                print("Current details:", student)
                student["name"] = input("Enter new name (or press Enter to keep): ") or student["name"]
                student["age"] = int(input("Enter new age (or press Enter to keep): ") or student["age"])
                student["grade"] = input("Enter new grade (or press Enter to keep): ") or student["grade"]
                print("Student updated successfully!")
                return
        print("Student not found.")
    except ValueError:
        print("Invalid input!")

# Function to delete a student
def delete_student():
    try:
        student_id = int(input("Enter student ID to delete: "))
        for i, student in enumerate(students):
            if student["id"] == student_id:
                del students[i]
                print("Student deleted successfully!")
                return
        print("Student not found.")
    except ValueError:
        print("Invalid ID!")

#Function to clear all students
def clear_all_students():
    global students
    confirm = input("Are you sure you want to clear all students? (y/n):")
    if confirm == 'y':
        students = []
        save_data()
        print("All students cleared.")
    else:
        print("Clear operation cancelled")    

# Main menu loop
while True:
    print("\n--- Student Record Manager ---")
    print("1. Add Students")
    print("2. View Students")
    print("3. Search Students")
    print("4. Update Student")
    print("5. Delete Student")
    print("6. Save Data")
    print("7. Exit")
    choice = input("Choose an option: ")
    
    if choice == "1":
        add_student()
    elif choice == "2":
        view_students()
    elif choice == "3":
        search_student()
    elif choice == "4":
        update_student()
    elif choice == "5":
        delete_student()
    elif choice == "6":
        save_data()
    elif choice == "7":
        clear_all_students()
    elif choice == "8":
        save_data()  # Auto-save before exiting
        print("Exiting...")
        break
    else:
        print("Invalid choice!")
