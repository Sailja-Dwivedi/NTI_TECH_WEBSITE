// public/scripts.js

// Function to fetch all courses
function fetchCourses() {
    fetch('/api/courses')
        .then(response => response.json())
        .then(courses => {
            const courseList = document.getElementById('content');
            courseList.innerHTML = '<h2>Courses</h2>';
            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.innerHTML = `
            <p><strong>Name:</strong> ${course.name}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Duration:</strong> ${course.duration} hours</p>
            <hr>
          `;
                courseList.appendChild(courseElement);
            });
        })
        .catch(error => console.error('Error fetching courses: ', error));
}

// Function to fetch all users
function fetchUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('content');
            userList.innerHTML = '<h2>Users</h2>';
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Registration Date:</strong> ${new Date(user.registrationDate).toLocaleDateString()}</p>
            <p><strong>Courses Enrolled:</strong> ${user.coursesEnrolled}</p>
            <hr>
          `;
                userList.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error fetching users: ', error));
}

// Function to add a new course
function addCourse(courseData) {
    fetch('/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseData)
    })
        .then(response => response.json())
        .then(course => {
            // Handle successful creation (e.g., redirect to view page)
            console.log('Course added successfully: ', course);
        })
        .catch(error => console.error('Error adding course: ', error));
}

// Function to add a new user
function addUser(userData) {
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(user => {
            // Handle successful creation (e.g., redirect to view page)
            console.log('User added successfully: ', user);
        })
        .catch(error => console.error('Error adding user: ', error));
}

// Event listener for submitting course form
document.getElementById('courseForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const courseData = {
        name: formData.get('name'),
        description: formData.get('description'),
        instructor: formData.get('instructor'),
        duration: parseInt(formData.get('duration'))
    };
    addCourse(courseData);
});

// Event listener for submitting user form
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    addUser(userData);
});
