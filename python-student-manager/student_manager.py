import json
import os
#global list to store student records 
students = []
# Main menu loop 
while True:
    print("Student Record Manager")
    print("1. Add Student")
    print("2. View Students")
    print("7. Exit")
    choice = input ("choose an option:")
    if choice == "1":
        print("add student here")
    elif choice == "2":
        print("view students here")
    elif choice == "7":
        print("exiting program")
        break
    else:
        print("invalid choice, please try again")
