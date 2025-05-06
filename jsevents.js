// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);

// Reveal images on button click
function revealImages() {
  document.getElementById("click-gallery").classList.add("clear");
}

// Form validation
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("form-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorDiv.textContent = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 8) {
    errorDiv.textContent = "Password must be at least 8 characters.";
    return false;
  }

  errorDiv.textContent = "";
  alert("Sign-up successful!");
  return true;
}