const images = [
  {
    image : "img/01.jpg",
    title : "Svezia",
    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
  },
  {
    image : "img/02.jpg",
    title : "Svizzera",
    text : "Lorem ipsum"
  },
  {
    image : "img/03.jpg",
    title : "Gran Bretagna",
    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    image : "img/04.jpg",
    title : "Germania",
    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  },
  {
    image : "img/05.jpg",
    title : "Paradise",
    text : "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  },
]

let itemTemplate = "";

let thumbTemplate = "";

let currentIndexActive = 0;

for (let i = 0; i < images.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${images[i].image}" />
      <div class="title">
        <h2>${images[i].title}</h2>
        <p>${images[i].text}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${images[i].image}" alt="" />
  </div>`;
}

const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
const stop = document.querySelector(".fa-circle-stop")

function slideDown() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");

  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }

  imgs[currentIndexActive].classList.add("active");

  thumbs[currentIndexActive].classList.add("active");
}
function slideUp() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");

  if (currentIndexActive === 0) {
    currentIndexActive = images.length - 1;
  } else {
    currentIndexActive--;
  }
  imgs[currentIndexActive].classList.add("active");
  thumbs[currentIndexActive].classList.add("active");
}
function stopSlide(){
  clearInterval(timer)
}
next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);
stop.addEventListener("click", stopSlide )
const timer = setInterval(slideDown, 4000) ;

