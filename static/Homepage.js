let toggleBtn = document.querySelector('.toggle_btn')
let toggleBtnIcon = document.querySelector('.toggle_btn i')
let dropDownMenu =document.querySelector('.dropdown_menu')
toggleBtn.onclick = function()
{
  dropDownMenu.classList.toggle('open')
  let isOpen=dropDownMenu.classList.contains('open')
  if (toggleBtnIcon.classList == isOpen)
  {
    'fa-solid fa-xmark'
  }
  else
  {
    'fa-solid fa-bars'
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loginButton = document.getElementById('login-btn');
  const logoutButton = document.getElementById('logout-btn');
  const bookNowButton = document.getElementById('book-now-btn');

  if (isLoggedIn === 'true') {
    console.log('User is logged in');
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
    bookNowButton.href = '/Book Now'; // Redirect to the specific page for logged-in users
  } else {
    console.log('User is logged out');
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
    bookNowButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Please login first.'); // Show a message if the user is not logged in
    });
  }

  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown_menu');

  toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    let isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa fa-xmark' : 'fa fa-bars';
  };

  document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  });
});


