const employees = [
  {
    id: 1,
    email: "employee1@ems.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Prepare the sales report for July.",
        taskDate: "2026-08-10",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Employee Records",
        taskDescription: "Update contact details of employees.",
        taskDate: "2026-08-02",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Meeting",
        taskDescription: "Attend project discussion with client.",
        taskDate: "2026-08-05",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@ems.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue.",
        taskDate: "2026-08-09",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment API.",
        taskDate: "2026-08-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request.",
        taskDate: "2026-08-03",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@ems.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI for landing page.",
        taskDate: "2026-08-01",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create dashboard wireframe.",
        taskDate: "2026-08-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Logo Revision",
        taskDescription: "Revise company logo.",
        taskDate: "2026-08-04",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@ems.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take backup of production database.",
        taskDate: "2026-08-08",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance.",
        taskDate: "2026-08-06",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Migration",
        taskDescription: "Migrate user data to new server.",
        taskDate: "2026-08-15",
        category: "Database"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@ems.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Registration",
        taskDescription: "Perform registration testing.",
        taskDate: "2026-08-01",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Run regression test suite.",
        taskDate: "2026-08-13",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test application under heavy load.",
        taskDate: "2026-08-07",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@ems.com",
    password: "123"
  }
];

export const setLocalStorage  = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage  = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)

}