// Dynamic greeting based on time
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('dynamic-greeting');
  if (!greeting) return;
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = 'Good Morning! Welcome to our Clothing Shop.';
  } else if (hour < 18) {
    greeting.textContent = 'Good Afternoon! Welcome to our Clothing Shop.';
  } else {
    greeting.textContent = 'Good Evening! Welcome to our Clothing Shop.';
  }
});

// Slideshow functionality
const slides = [
  'images/clothes1.jpg',
  'images/clothes2.jpg',
  'images/clothes3.jpg',
];
let currentSlide = 0;

const slideImg = document.getElementById('slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slideImg.src = slides[currentSlide];
}

if (prevBtn && nextBtn && slideImg) {
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });
  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });
}

// Form validation on contact page
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
      formMessage.classList.remove('hidden');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      formMessage.classList.remove('hidden');
      return;
    }
    formMessage.textContent = 'Thank you for contacting us!';
    formMessage.style.color = 'green';
    formMessage.classList.remove('hidden');
    contactForm.reset();
  });
}
// Login form validation
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    if (!username || !password) {
      loginMessage.textContent = 'Please enter both username and password.';
      loginMessage.style.color = 'red';
      loginMessage.classList.remove('hidden');
      return;
    }

    // Pretend validation succeeded
    loginMessage.textContent = 'Login successful!';
    loginMessage.style.color = 'green';
    loginMessage.classList.remove('hidden');
    loginForm.reset();
  });
}

// Signup form validation
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newusername = signupForm.newusername.value.trim();
    const newemail = signupForm.newemail.value.trim();
    const newpassword = signupForm.newpassword.value.trim();

    if (!newusername || !newemail || !newpassword) {
      signupMessage.textContent = 'Please fill in all fields.';
      signupMessage.style.color = 'red';
      signupMessage.classList.remove('hidden');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newemail)) {
      signupMessage.textContent = 'Please enter a valid email address.';
      signupMessage.style.color = 'red';
      signupMessage.classList.remove('hidden');
      return;
    }

    signupMessage.textContent = 'Account created successfully!';
    signupMessage.style.color = 'green';
    signupMessage.classList.remove('hidden');
    signupForm.reset();
  });
}
