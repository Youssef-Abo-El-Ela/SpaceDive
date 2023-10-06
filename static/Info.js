const planetsData = [
  { 
      name: "Mercury", 
      info: "Mercury is the smallest planet in our solar system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Venus", 
      info: "Venus is the hottest planet in our solar system due to its thick atmosphere.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Earth", 
      info: "Earth is the only planet known to support life.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Mars", 
      info: "Mars is often called the 'Red Planet'.",
      image: "mars-removebg-preview.png"
  },
  { 
      name: "Jupiter", 
      info: "Jupiter is the largest planet in our solar system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Saturn", 
      info: "Saturn is known for its beautiful ring system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Uranus", 
      info: "Uranus is tilted on its side, rotating almost perpendicular to the plane of its orbit.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Neptune", 
      info: "Neptune is the farthest planet from the Sun in our solar system.",
      image: "https://via.placeholder.com/150"
  }
];

function initializeDropdown(optionMenu) {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");
  const planetCards = document.querySelectorAll(".planet-card");

  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");

    planetCards.forEach(card => {
      card.style.marginTop = optionMenu.classList.contains("active") ? "360px" : "20px";
    });
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(`Chosen planet: ${selectedOption}`); 
      let scrollHeight = 0; 
      planetCards.forEach(card => {
        console.log(card.getAttribute("data-value"))
        if (card.getAttribute("data-value") !== selectedOption) {
          scrollHeight+=450;
        }
        else
        {
          window.scrollTo({ top: scrollHeight, behavior: "smooth" });

        }
      });
      optionMenu.classList.remove("active");
      planetCards.forEach(card => {
        card.style.marginTop = "20px";
      });
    });
  });
}
const allOptionMenus = document.querySelectorAll(".select-menu");
allOptionMenus.forEach(optionMenu => {
  initializeDropdown(optionMenu);
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
