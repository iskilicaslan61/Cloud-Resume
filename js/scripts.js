document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace with your API Gateway URL
    const apiUrl = 'YOUR_API_GATEWAY_URL';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to send message.');
        }
    })
    .then(data => {
        document.getElementById('form-result').innerText = 'Message sent successfully!';
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-result').innerText = 'Failed to send message. Please try again later.';
    });
});

// Fetch and display visitor count
function updateVisitorCount() {
    const visitorApiUrl = 'YOUR_VISITOR_API_URL'; // Replace with your API Gateway endpoint

    fetch(visitorApiUrl, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // Adjust this depending on your Lambda's response structure
        document.getElementById('visitor-count').innerText = data.count || data.visitorCount || 0;
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').innerText = 'N/A';
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);