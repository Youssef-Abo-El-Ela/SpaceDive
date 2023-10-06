const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
/** */
function registrationData(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if required fields are not empty
    if (username && email && password) {
        // Get existing users from local storage or initialize an empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username or email is already registered
        const userExists = users.some(user => user.username === username || user.email === email);
        if (userExists) {
            alert('Username or email already exists. Please choose a different one.');
        } 
        else {
            // Add new user data to the array
            users.push({ username, email, password });

            // Save updated users array to local storage
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful!');
            location.reload();
        }
    } else {
        alert('Please fill in all fields.');
    }
}
function loginData(event) {
    event.preventDefault(); 
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
document.querySelector('.sign-in-form').addEventListener('submit', loginData);
document.querySelector('.sign-up-form').addEventListener('submit', registrationData);
