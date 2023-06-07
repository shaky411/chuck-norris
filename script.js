const jokeBtn = document.getElementById("joke-btn");
const joke = document.getElementById("joke-container");
const clear = document.getElementById("clear");
const like = document.getElementById("like");
const copy = document.getElementById("copy");
const favBtn = document.getElementById("favorites");
const favorites = document.getElementById("favorites-container");
const close = document.getElementById("close");
const favList = document.getElementById("fav-list");
const copyFav = document.getElementById("copy-fav");

const localStorageJokes = JSON.parse(localStorage.getItem("jokes"));

// When the like button is clicked run this code
function likeJoke(event) {
  event.preventDefault();

  const marc = {
    id: generateID(),
    text: joke.innerHTML,
  };

  jokes.push(marc);
  addJokeDOM(marc);
  updateLocalStorage();
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

let jokes = localStorage.getItem("jokes") !== null ? localStorageJokes : [];
console.log(jokes);

// Add item to favourites list
function addJokeDOM(marc) {
  const favEl = document.createElement("li");
  favEl.id = `joke-${marc.id}`;
  console.log(favEl.id);

  favEl.innerHTML = `${marc.text} <div id="btn-div"> <button id="copy-fav" onClick="copyFavJoke(${marc.id})"><i class="fa-solid fa-clipboard"></i></button> <button class="delete-btn" onClick="deleteFavJoke(${marc.id})"><i class="fa-solid fa-trash-can"></i></button> </div>`;

  favList.appendChild(favEl);
}

// Copy item to clipboard
function copyJoke() {
  navigator.clipboard.writeText(joke.innerHTML);
  openModal();
}

// Copy favourite item to clipboard
function copyFavJoke(id) {
  jokes = jokes.filter((marc) => marc.id !== id);

  const favJoke = document.getElementById(`joke-${id}`);
  // console.log(favJoke.innerText.trim())

  navigator.clipboard.writeText(favJoke.innerText.trim());
  openModal();
}

// Delete item from favourites list
function deleteFavJoke(id) {
  jokes = jokes.filter((marc) => marc.id !== id);
  // console.log(jokes);

  const favEl = document.getElementById(`joke-${id}`);
  if (favEl) {
    favEl.remove();
  }
  updateLocalStorage();
}

// Fetches joke when new joke button is clicked
async function logJSONData() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jsonData = await response.json();
  // console.log(jsonData);

  joke.classList.remove("hidden");
  clear.classList.remove("hidden");
  like.classList.remove("hidden");
  copy.classList.remove("hidden");
  favorites.classList.add("hidden");

  joke.innerHTML = jsonData.value;
}

//   clears the currently displayed joke
function clearData() {
  joke.innerHTML = "";
  joke.classList.add("hidden");
  clear.classList.add("hidden");
  like.classList.add("hidden");
  copy.classList.add("hidden");
}

// show favourites section
function showFav() {
  favorites.classList.toggle("hidden");
  joke.classList.add("hidden");
  clear.classList.add("hidden");
  like.classList.add("hidden");
  copy.classList.add("hidden");
}

//  hide favourites section
function hideFav() {
  favorites.classList.add("hidden");
}

function updateLocalStorage() {
  localStorage.setItem("jokes", JSON.stringify(jokes));
}

function init() {
  jokes.forEach(addJokeDOM);
}

init();

// Button Event Listeners
jokeBtn.addEventListener("click", logJSONData);
clear.addEventListener("click", clearData);
favBtn.addEventListener("click", showFav);
close.addEventListener("click", hideFav);
like.addEventListener("click", likeJoke);
copy.addEventListener("click", copyJoke);


// Alert Modal

const modal = document.querySelector(".main-modal");
const closeButton = document.querySelectorAll(".modal-close");

function modalClose() {
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

function openModal() {
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "flex";
}

for (let i = 0; i < closeButton.length; i++) {
  const elements = closeButton[i];

  elements.onclick = (e) => modalClose();

  modal.style.display = "none";

  window.onclick = function (event) {
    if (event.target == modal) modalClose();
  };
}






// About Modal

const aboutModal = document.querySelector(".about-modal");
const aboutCloseButton = document.querySelectorAll(".about-modal-close");

function aboutModalClose() {
  aboutModal.classList.remove("fadeIn");
  aboutModal.classList.add("fadeOut");
  setTimeout(() => {
    aboutModal.style.display = "none";
  }, 500);
}

function aboutOpenModal() {
  aboutModal.classList.remove("fadeOut");
  aboutModal.classList.add("fadeIn");
  aboutModal.style.display = "flex";
}

for (let i = 0; i < aboutCloseButton.length; i++) {
  const elements = aboutCloseButton[i];

  elements.onclick = (e) => aboutModalClose();

  aboutModal.style.display = "none";

  window.onclick = function (event) {
    if (event.target == aboutModal) aboutModalClose();
  };
}

const aboutBtn = document.getElementById('about');

aboutBtn.addEventListener('click', aboutOpenModal);
