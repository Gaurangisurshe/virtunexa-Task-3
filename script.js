// Select the form and error message elements
const pollForm = document.getElementById('pollForm');
const errorMessage = document.getElementById('errorMessage');

// Function to handle form submission
pollForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const question = document.getElementById('question').value.trim();
    const options = document.getElementById('options').value.trim();

    // Validate inputs
    if (!question || !options) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Split options by comma and trim whitespace
    const optionsArray = options.split(',').map(option => option.trim()).filter(option => option);

    // Check if there are at least two options
    if (optionsArray.length < 2) {
        errorMessage.textContent = 'Please provide at least two options.';
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Simulate poll creation (you would typically send this data to a server)
    console.log('Poll Created:');
    console.log('Question:', question);
    console.log('Options:', optionsArray);

    // Display success message
    alert('Poll created successfully!');

    // Reset the form
    pollForm.reset();
});

// Optional: Function to handle real-time updates (placeholder for future implementation)
function updatePollResults() {
    // This function would be used to fetch and display poll results in real-time
    // You can implement AJAX calls or WebSocket connections here
}