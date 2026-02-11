# Global list to store student records
students = []

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
    print("/nStudent Records:")
    for student in students:
        print(f"ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Grade:{student['grade']}")
# Function to search student by ID
def search_student():
    try:
        student_id = int(input("Enter student ID to search: "))
        for student in students:
            if student["id"] == student_id:
                print(f"Found: ID: {student['id']}, Name:{student['name']}, Age:{student['age']}, Grade: {student['grade']}")
                return
        print("Student not found!")
    except ValueError:
        print("Invalid input! Please enter a number for ID.")
# Fun ction to update a studemt
def update_student():
    try:
        student_id = int(input("Enter student ID to update:"))
        for student in students:
            if student["id"] == student_id:
                print("Current details:", student)
                student["name"] = input("Enter new name (or press Enter to keep):") or student["name"]
                student["age"] = int(input("Enter new age (or press Enter to keep): ") or student["age"])
                student["grade"] = input("Enter new grade (or press Enter to keep): ") or student["grade"]
                print("Student updated successfully!")
                return
            print("Student not found.")
    except ValueError:
        print("Invalid input!")
# Main menu loop
while True:
    print("/n--- Student Record Manager ---")
    print("1. Add Students")
    print("2. View Students")
    print("3. Search Students")
    print("4. Update Student")
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
    elif choice == "7":
        print("Exiting...")
        break
    else:
        print("Invalid choice!")