const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

function sendToWhatsApp(event) {
  event.preventDefault(); // Prevent form submission

  let phoneNumber = "675903435"; // Replace with your WhatsApp number (e.g., 237XXXXXXXXX)
  
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let description = document.getElementById("description").value;

  let message = `Hello, I want to get in touch!\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nDescription: ${description}`;

  let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappURL; // Redirect to WhatsApp
}



function toggleReadMore(event, textId) {
  event.preventDefault();
  var moreText = document.getElementById(textId);
  var linkText = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    linkText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    linkText.textContent = "Read More";
  }
}

function toggleReadMore(event, textId) {
  event.preventDefault();
  var moreText = document.getElementById(textId);
  var linkText = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    linkText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    linkText.textContent = "Read More";
  }
}

function toggleReadMore(event, textId) {
  event.preventDefault();
  var moreText = document.getElementById(textId);
  var linkText = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    linkText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    linkText.textContent = "Read More";
  }
}