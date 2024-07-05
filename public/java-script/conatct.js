
// Form contact submit footer form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.querySelector("#contactName").value;
    const email = document.querySelector("#contactEmail").value;
    const phone = document.querySelector("#contactPhone").value;
    const message = document.querySelector("#contactMessage").value;
    const jsonData = { name, email, phone, message };
    console.log(jsonData);

    const empty = jsonData == "";
    // Send data to API endpoint
    if (!empty) {

        fetch('http://localhost:3500/api/Contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    // Clear the form after successful submission
                    document.getElementById('contactForm').reset().value;
                } else {
                    throw new Error('Failed to send message');
                }
            })
            .catch(error => {
                // console.error('Error:', error);
                alert('Failed to send message. Please try again later.');
            });
    } else {
        alert('Please fill out all fields');
    }
});

