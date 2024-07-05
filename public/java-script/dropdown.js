// List of courses from the image
const courses = [
    "Machine Learning + AI",
    "Data Science",
    "Automation Testing",
    "Mean Stack",
    "Digital Marketing",
    "Mern Stack",
    "Basics Computer",
    "Android",
    "Cloud Computing",
    "Python",
    "Manual Testing",
    "C/C++",
    "Java Full Stack",
    "SQL",
    "Graphic Design",
    "IOS",
    "Advance Excel"
];

// Function to open the register modal and set the course name
function openRegisterModal(course) {
    document.getElementById('course-name').value = course;
    $('#registerModal').modal('show');
}

// Populate the dropdown list in the navbar with courses
const dropdownMenu = document.querySelector('.dropdown-menu');
courses.forEach(course => {
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.textContent = course;
    a.onclick = () => {
        openRegisterModal(course);
    };
    dropdownMenu.appendChild(a);
});

// Populate the dropdown list in the main section with courses
const courseSelect = document.getElementById('courseSelect');
courses.forEach(course => {
    const option = document.createElement('option');
    option.text = course;
    option.value = course;
    courseSelect.add(option);
});
