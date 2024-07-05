

// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch courses from the API
//     fetch('http://localhost:3500/api/allcourse')
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 const courses = data.courses;
//                 const courseContainer = document.getElementById('courseContainer');
//                 courses.forEach(course => {
//                     const courseCard = document.createElement('div');
//                     courseCard.classList.add('col-md-4', 'mb-4');
//                     courseCard.innerHTML = `
//                     <div class="card">
//                         <img src="${course.image}" class="card-img-top" alt="${course.name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${course.name}</h5>
//                             <p class="card-text">${course.description}</p>

//                             <button class="btn btn-primary register-btn" data-toggle="modal" data-target="#registerModal" data-course="${course.name}">Register</button>
//                         </div>
//                     </div>
//                 `;
//                     console.log(courseCard)
//                     // courseContainer.appendChild(courseCard);
//                 });

//                 // agar price add karna hai to is code ko add karna hoga
//                 // <p class="card-text"><strong>Price:</strong> ${course.price}</p>

//                 // Add event listener to register buttons
//                 const registerButtons = document.querySelectorAll('.register-btn');
//                 registerButtons.forEach(button => {
//                     button.addEventListener('click', (event) => {
//                         const courseName = event.target.getAttribute('data-course');
//                         document.getElementById('courseName').value = courseName;
//                     });
//                 });
//             }
//         })
//         .catch(error => console.error('Error fetching courses:', error));

//     // Function to verify token
//     function verifyToken(token) {
//         // Call the protected route with the token
//         fetch('http://localhost:3500/api/protectedRoute', {
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     console.log('Token is valid');
//                 } else {
//                     console.error('Token verification failed');
//                 }
//             })
//             .catch(error => console.error('Error verifying token:', error));
//     }

//     // Verify token when the page loads
//     const token = localStorage.getItem('token');
//     if (token) {
//         verifyToken(token);
//     }

//     // Handle registration form submission
//     const registrationForm = document.getElementById('registrationForm');
//     registrationForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         event.stopPropagation();

//         if (registrationForm.checkValidity()) {
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             //  const password = document.getElementById('password').value;
//             const courseName = document.getElementById('courseName').value;

//             fetch('http://localhost:3500/api/registration', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     email: email,
//                     //  password: password,
//                     courseName: courseName
//                 })
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data) {
//                         alert('Registration successful!');
//                         $('#registerModal').modal('hide');
//                         registrationForm.reset();
//                     } else {
//                         alert('Registration failed: ' + data.message);
//                     }
//                 })
//                 .catch(error => console.error('Error during registration:', error));
//         }

//         registrationForm.classList.add('was-validated');
//     });

//     // Handle login form submission (optional, depending on your requirements)
//     // const loginForm = document.getElementById('loginForm');
//     // loginForm.addEventListener('submit', (event) => {
//     //     event.preventDefault();
//     //     event.stopPropagation();

//     //     if (loginForm.checkValidity()) {
//     //         const email = document.getElementById('loginEmail').value;
//     //         const password = document.getElementById('loginPassword').value;

//     //         fetch('http://localhost:3500/api/login', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify({ email, password })
//     //         })
//     //             .then(response => response.json())
//     //             .then(data => {
//     //                 if (data) {
//     //                     // Save token to l
//     //                     console.log(data)// storage
//     //                     localStorage.setItem('token', data.token);
//     //                     alert('Login successful!');
//     //                     $('#loginModal').modal('hide');
//     //                     loginForm.reset();
//     //                     // Verify token
//     //                     verifyToken(data.token);
//     //                 } else {
//     //                     alert('Login failed: ' + data.message);
//     //                 }
//     //             })
//     //             .catch(error => console.error('Error during login:', error));
//     //     }

//     //     loginForm.classList.add('was-validated');
//     // });
// });



function fetchAndDisplayCourses() {
    fetch('http://localhost:3500/api/allcourse')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const courseContainer = document.getElementById('courseContainer');
            data.courses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('col-md-4', 'course-card');

                const courseImage = document.createElement('img');
                courseImage.classList.add('course-image', 'w-100');

                const cleanedImagePath = course.image.replace(/..[\\/]+public[\\/]+/, '');
                courseImage.src = `${cleanedImagePath}`;
                courseImage.alt = course.name;

                const courseDetails = document.createElement('div');
                courseDetails.classList.add('course-details');

                const courseName = document.createElement('h5');
                courseName.textContent = course.name;

                const courseDescription = document.createElement('p');
                courseDescription.textContent = course.description;

                const courseCategory = document.createElement('p');
                courseCategory.textContent = `Category: ${course.category}`;

                const coursePrice = document.createElement('p');
                coursePrice.textContent = `Price: $${course.price}`;

                const registerButton = document.createElement('button');
                registerButton.textContent = 'Register';
                registerButton.classList.add('btn', 'btn-primary', 'mt-2', 'register');
                registerButton.setAttribute('data-course-name', course.name);
                registerButton.onclick = function () {
                    openRegistrationModal(course.name);
                };

                courseDetails.appendChild(courseName);
                courseDetails.appendChild(courseDescription);
                // courseDetails.appendChild(courseCategory);
                // courseDetails.appendChild(coursePrice);
                courseDetails.appendChild(registerButton);

                courseCard.appendChild(courseImage);
                courseCard.appendChild(courseDetails);

                courseContainer.appendChild(courseCard);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function openRegistrationModal(courseName) {
    const modal = document.getElementById('registerModal');
    const courseNameInput = modal.querySelector('#courseName');
    courseNameInput.value = courseName;
    $('#registerModal').modal('show');
}

function registerUser(name, email, phone, courseName) {
    var payload = {
        name: name,
        email: email,
        phone: phone,
        courseName: courseName
    };
    console.log(payload);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    const endpoint = 'http://localhost:3500/api/registerForCourse'; // Replace with your actual endpoint

    fetch(endpoint, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
            alert('Registration successful!');
            $('#registerModal').modal('hide');
            // Optionally, you can display a success message or redirect the user to a new page
        })
        .catch(error => {
            console.error('Error registering user:', error.message);
            alert('Error registering user: ' + error.message);
            // Optionally, you can display an error message to the user
        });
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const courseName = document.getElementById('courseName').value;

    console.log("data", name, email, phone, courseName);
    registerUser(name, email, phone, courseName);
});

document.addEventListener('DOMContentLoaded', fetchAndDisplayCourses);

