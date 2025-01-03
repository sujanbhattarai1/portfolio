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
      const formObject = {}; // Initialize an empty object

      // Convert FormData into an object
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Reset the form immediately after the submission
      contactForm.reset();

      // Fetch request to your backend
      const response = await fetch("https://portfolio-backend-hlzrzresf-sujan-bhattarais-projects.vercel.app/api/server", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Ensure content-type is set for URL-encoded data
        },
        body: new URLSearchParams(formObject), // Serialize formObject into URL-encoded format
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    });
  }
});
















