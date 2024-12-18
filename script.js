// here getting the typewriter effect
const typewriterAbt = document.getElementById("typewriter-about");
const text =
  "I’m Soumitri Mishra! I’ve built my portfolio website from scratch using HTML, CSS, and JavaScript. I took inspiration from Pinterest, designed elements with Canva, and learned along the way with the help of YouTube and ChatGPT.";
let index = 0;

function type() {
  if (index < text.length) {
    // here the slice will return one one letters of the text
    typewriterAbt.innerHTML =
      text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    index++;
    setTimeout(type, 20);
  } else {
    typewriterAbt.innerHTML =
      text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    // here the adding of text will stop and the full stop pipe only blink
  }
}

type();

//swiper
const wrapper = document.querySelector(".projects-container");
const carousel = document.querySelector(".projects");
const arrowBtns = document.querySelectorAll(".projects-container i");
const firstCardWidth = carousel.querySelector(".project").offsetWidth;
const carouselChildrens = [...carousel.children];
//this is to drag scroll
let isDragging = false,
  startX,
  startScrollLeft,
  timoutId;
let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPreview)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPreview).forEach((card) => {
  carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1);
};

autoPlay();

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timoutId));
carousel.addEventListener("mouseleave", autoPlay);

//for contact pop-ip form
const toggleButton = document.getElementById("contact-text");
const closeBtn = document.getElementById("close-popup-text");

function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");

  var popUp = document.getElementById("popup-form");
  popUp.classList.toggle("active");
}

toggleButton.addEventListener("click", toggle);
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggle();
});

//for navbar
const closeButton = document.getElementById("icon1");
const showButton = document.getElementById("icon2");

var navDetails = document.getElementById("navDetails");

function showMenu() {
  navDetails.style.right = "0";
}

function hideMenu() {
  navDetails.style.right = "-200px";
}

showButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu);

// for smooth scroll
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const skillsLink = document.querySelector(".skills-link");
const projectsLink = document.querySelector(".projects-link");
const pageOne = document.getElementById("page-one");
const pageThree = document.getElementById("page-three");
const pageFour = document.getElementById("page-four");
const pageFive = document.getElementById("page-five");

homeLink.addEventListener("click", () => {
  pageOne.scrollIntoView({ behavior: "smooth" });
});

aboutLink.addEventListener("click", () => {
  pageThree.scrollIntoView({ behavior: "smooth" });
});

skillsLink.addEventListener("click", () => {
  pageFour.scrollIntoView({ behavior: "smooth" });
});

projectsLink.addEventListener("click", () => {
  pageFive.scrollIntoView({ behavior: "smooth" });
});
