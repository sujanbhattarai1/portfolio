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
    // Remove one character at a time
    currentCharIndex--;
  } else {
    // Add one character at a time
    currentCharIndex++;
  }

  // Update the displayed text
  dynamicText.textContent = currentPhrase.substring(0, currentCharIndex);

  // If the full phrase is typed
  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    isDeleting = true; // Start deleting
    setTimeout(typeEffect, 1500); // Pause before deleting
  }
  // If the phrase is completely deleted
  else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false; // Start typing the next phrase
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop to the next phrase
    setTimeout(typeEffect, 500);
  } else {
    // Continue typing or deleting
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// Start the typing effect
typeEffect();


//Education detail show effect
document.querySelectorAll(".education-item").forEach((item) => {
  item.addEventListener("click", () => {
    const details = item.querySelector(".details");
    if (details) {
      details.classList.toggle("hidden");
    }
  });
});



//javascript toggle effect for experience
document.querySelectorAll(".experience-card").forEach((card) => {
  card.addEventListener("click", () => {
    const details = card.querySelector(".details");
    if (details) {
      details.classList.toggle("hidden");
    }
  });
});


// JavaScript for fade-in effect on scroll for experience section
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
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  experienceCards.forEach((card) => observer.observe(card));
});



/* footer top button */
  function scrollToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

