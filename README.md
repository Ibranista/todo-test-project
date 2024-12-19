# To-Do List Application

This is a simple To-Do List application built with React, TypeScript, and Vite.

## Features
- **To-Do Input Form**: Add new tasks with a description and due date.
- **Task List**: Display tasks with options to:
  - Mark tasks as completed.
  - Delete tasks.
- **Task Filtering**: Filter tasks by:
  - All tasks
  - Active tasks (not completed)
  - Completed tasks
- **State Management**: Uses React `useState` and `useContext` for managing state.
- **Styling**: Built with [TailwindCSS](https://tailwindcss.com/) for layout and styles.
- **Persistence**: Tasks are saved in `localStorage` to persist data across sessions.
- **Sorting**: Tasks are sorted by their due date.

## Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
2. Run the development server:

bash
Copy code
npm run dev

Technologies Used
React: Front-end JavaScript library for building user interfaces.
TypeScript: Adds static types to JavaScript for better code quality.
Vite: A fast build tool for modern web development.
TailwindCSS: A utility-first CSS framework for designing UIs.

# Next Steps I would do
Refactor and separate interfaces and types into dedicated files.
Enhance functionality with features like task prioritization or reminders.