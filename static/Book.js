const oneWayRadio = document.querySelector('input[name="travelType"][value="One Way"]');
const roundwayTrip = document.querySelector('input[name="travelType"][value="Round Trip"]');
const multiPlante = document.querySelector('input[name="travelType"][value="Multi Plante"]');
const returningInput = document.getElementById('Returning-List-box');

function initializeDropdown(optionMenu) {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

  options.forEach(option => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
  });
}

const allOptionMenus = document.querySelectorAll(".select-menu");
allOptionMenus.forEach(optionMenu => {
  initializeDropdown(optionMenu);
});

oneWayRadio.addEventListener('change', handleRadioChange);
roundwayTrip.addEventListener('change', handleRadioChange);
multiPlante.addEventListener('change', handleRadioChange);

function handleRadioChange() {
  if (oneWayRadio.checked) {
    returningInput.style.display = 'none';
  }
  else if (roundwayTrip.checked) {
    returningInput.style.display = 'block';
  }
  else {
    returningInput.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const spaceTravelButton = document.getElementById('spaceTravelButton');
  const subMenuContainer = document.querySelector('.sub_menu_container');
  const formContainer = document.querySelector('.form-container');
  spaceTravelButton.classList.add('clicked', 'red-text');
  subMenuContainer.style.display = 'flex';
  formContainer.style.display = 'block';
});

let toggleBtn = document.querySelector('.toggle_btn')
let toggleBtnIcon = document.querySelector('.toggle_btn i')
let dropDownMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  let isOpen = dropDownMenu.classList.contains('open')
  if (toggleBtnIcon.classList == isOpen) {
    'fa-solid fa-xmark'
  }
  else {
    'fa-solid fa-bars'
  }
}
const datesList1 = [
  "10/19/2023",
  "11/19/2024",
  "12/19/2025"
];

const datesList2 = [
  "11/19/2024",
  "12/19/2025",
  "1/19/2027"
]
const datesList3 = [
  "13/2/2025",
  "13/4/2027",
  "13/6/2029"
];

const datesList4 = [
  " 13/4/2027",
  "13/6/2029",
  "13/8/2031"
]
const datesList5 = [
  "31/10/2023",
  "31/10/2024",
  "31/10/2025"
];

const datesList6 = [
  "31/10/2024",
  "31/10/2025",
  "31/10/2026"
]
const datesList7 = [
  "29/11/2024",
  "29/06/2026",
  "29/01/2028"
];

const datesList8 = [
  "29/02/2025",
  "29/09/2026",
  "29/04/2028"
]
const selectBtn = document.querySelector('.select-btn');
const options = document.querySelectorAll('.options .option');
function handleSelectionChange() {

  if (this.querySelector('.option-text').textContent === 'Jupiter') {

    const returningListBox2 = document.getElementById('Returning-List-box');
    const departingListBox2 = document.getElementById('Departing-date');
    const spanElements= departingListBox2.querySelectorAll('.option-text');
    const spanElements2 = returningListBox2.querySelectorAll('.option-text');
    for (let i = 0; i < datesList1.length; i++) {
      spanElements[i].textContent = datesList1[i];
      spanElements2[i].textContent = datesList2[i];
    }
  }
  if (this.querySelector('.option-text').textContent === 'Mars') {
    const departingListBox2 = document.getElementById('Departing-date');
    const returningListBox2 = document.getElementById('Returning-List-box');
    const spanElements = departingListBox2.querySelectorAll('.option-text');
    const spanElements2 = returningListBox2.querySelectorAll('.option-text');
    for (let i = 0; i < datesList3.length; i++) {
      spanElements[i].textContent = datesList3[i];
      spanElements2[i].textContent = datesList4[i];
    }
  }
  if (this.querySelector('.option-text').textContent === 'Uranus') {

    const returningListBox2 = document.getElementById('Returning-List-box');
    const departingListBox2 = document.getElementById('Departing-date');
    const spanElements2 = returningListBox2.querySelectorAll('.option-text');
    const spanElements = departingListBox2.querySelectorAll('.option-text');
    for (let i = 0; i < datesList3.length; i++) {
      spanElements[i].textContent = datesList5[i];
      spanElements2[i].textContent = datesList6[i];
    }
  }
  if (this.querySelector('.option-text').textContent === 'Venus') {

    const returningListBox2 = document.getElementById('Returning-List-box');
    const departingListBox2 = document.getElementById('Departing-date');
    const spanElements2 = returningListBox2.querySelectorAll('.option-text');
    const spanElements = departingListBox2.querySelectorAll('.option-text');
    for (let i = 0; i < datesList3.length; i++) {
      spanElements[i].textContent = datesList7[i];
      spanElements2[i].textContent = datesList8[i];
    }
  }
}
selectBtn.addEventListener('click', function () {
  document.querySelector('.options').classList.toggle('active');
});
options.forEach(option => {
  option.addEventListener('click', handleSelectionChange);
});
document.addEventListener("DOMContentLoaded", function() {
  const noteTitleElement = document.getElementById("note-title");
  const noteTextElement = document.getElementById("note-text");

  // Change the content of the note
  noteTitleElement.textContent = "New Note Title";
  noteTextElement.textContent = "This is the updated content of the note. You can modify it using JavaScript.";
});

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