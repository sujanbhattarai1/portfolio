document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("show");
  });
});



/*hamburger toggling effect*/
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

/*for dynamic typing*/
const dynamicText = document.querySelector('.dynamic-text');
const phrases = ["Computer Engineering Student", "Web Developer", "Freelancer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];
  
  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  dynamicText.textContent = currentPhrase.substring(0, currentCharIndex);

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();

//Fade in effect for education section 
document.addEventListener('DOMContentLoaded', function () {
  const educationItems = document.querySelectorAll('.education-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the item is visible
  );

  educationItems.forEach((item) => observer.observe(item));
});


// Education detail show effect
document.querySelectorAll(".education-item").forEach((item) => {
  item.addEventListener("click", () => {
    const details = item.querySelector(".details");
    if (details) {
      details.classList.toggle("hidden");
    }
  });
});

// Experience toggle effect
document.querySelectorAll(".experience-card").forEach((card) => {
  card.addEventListener("click", () => {
    const details = card.querySelector(".details");
    if (details) {
      details.classList.toggle("hidden");
    }
  });
});

// Fade-in effect on scroll for experience section
document.addEventListener("DOMContentLoaded", () => {
  const experienceCards = document.querySelectorAll(".experience-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  experienceCards.forEach((card) => observer.observe(card));
});



// Functionality for all toggle-details buttons
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling; // Get the .details div next to the button
    if (details && details.classList.contains('details')) {
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show details
        button.textContent = "Hide Details"; // Change button text
      } else {
        details.style.display = "none"; // Hide details
        button.textContent = "Show Details"; // Change button text
      }
    }
  });
});

// Ensure all .details divs are hidden initially
document.querySelectorAll('.details').forEach(details => {
  details.style.display = "none"; // Set initial state to hidden
});


/* footer top button */
function scrollToHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*form submission message in dialogue box */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => formObject[key] = value);

      // Reset the form immediately after the submission
      contactForm.reset();

      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formObject),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    });
  }
});
















/* Small Screens (Below 768px) */
// @media (max-width: 768px) {
//   .nav-menu ul {
//     display: none;
//     position: fixed;
//     top: 127px; /* Adjusted to place it below the hamburger icon */
//     right: 0; /* Position the entire nav menu on the right side of the screen */
//     height: auto; /* Adjust height based on content */
//     width: auto; /* Auto width to fit content */
//     background-color: transparent; /* Transparent background initially */
//     padding: 0.5rem; /* Adjusted padding to reduce size */
//     flex-direction: column;
//     align-items: flex-end; /* Center-align items */
//     z-index: 1000;
//     border-radius: 0 0 0 10px;
//     gap: 0.24rem; /* Reduced gap between items */
//     transition: background-color 0.3s ease; /* Smooth transition for background color */
   
//   }

  // .nav-menu ul.show {
  //   display: flex; /* Show the menu when toggled */
  //   flex-direction: column; /* Stack icons vertically */
  //   align-items: flex-end; /* Center-align the icons */
  //   gap: 0.2rem; /* Add spacing between icons */
  //   background-color: transparent; /* Remove any background color */
  //   padding: 0; /* Remove padding */
  //   margin: 0; /* Remove margin */
  //   list-style: none; /* Remove bullet points */
  //   box-shadow: none; /* Ensure no box shadow */
  //   border: none; /* Ensure no border */
  // }
  

//   .nav-menu li {
//     width: auto; /* Adjust width to fit only icons */
//     display: flex;
//     justify-content: center; /* Center-align each list item content */
//     margin: 0;
//   }

//   .nav-menu a {
//     font-size: 15rem; /* Adjust icon size */
//     gap: 0.25rem; /* Reduced spacing between icon and text */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center; /* Align text to the center */
//     width: 40px; /* Set fixed width for the icon area */
//     height: 40px; /* Set fixed height for the icon area */
//     border-radius: 50%; /* Optional: make the icon area circular */
//     background-color: transparent; /* Ensure no background color */
//     margin-right: 10px;
//   }

//   .nav-menu a i {
//     font-size: 1.7rem; /* Adjust the icon size */
//     background-color:rgba(255, 255, 255, 0.1) ; /* Ensure icon has no background color */
//   }

//   .nav-menu a span {
//     display: none; /* Hide text for small screens */
//   }

//   .nav-toggle {
//     display: block; /* Display hamburger icon */
//     position: absolute;
//     top: 20px; /* Position at the top of the screen */
//     right: 20px; /* Align hamburger icon to the right */
//   }
// }

















