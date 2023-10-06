document.addEventListener('DOMContentLoaded', function() {
    // Retrieve login status from local storage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const signupButton = document.getElementById('login-btn');
    const logoutButton = document.getElementById('logout-btn');

    // Check the login status and hide/show buttons accordingly
    if (isLoggedIn) {
        signupButton.style.display = 'none'; // Hide signup button
        logoutButton.style.display = 'block'; // Show logout button
    } else {
        signupButton.style.display = 'block'; // Show signup button
        logoutButton.style.display = 'none'; // Hide logout button
    }
});

// Add event listener to the logout button for logout functionality
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', function() {
    // Perform logout operations, e.g., clear user session, update isLoggedIn status in local storage, etc.
    localStorage.setItem('isLoggedIn', 'false'); // Assuming you use localStorage to track login status
    // After logout, redirect the user to the homepage or login page
    window.location.href = "{{url_for('Homepage')}}"; // Replace with the appropriate URL
});