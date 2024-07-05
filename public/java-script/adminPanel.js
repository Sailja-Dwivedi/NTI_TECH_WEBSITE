
// Handle admin login form submission
document.getElementById('adminLoginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;

    if (username && password) {
        fetch('http://localhost:3500/api/Admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Redirect to the dashboard on successful login
                    window.location.href = 'http://localhost:3500/dashborad.html'; // Correct path to your dashboard
                    alert("login successfully");
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                alert('An error occurred while logging in: ' + error.message);
            });
    }
});
