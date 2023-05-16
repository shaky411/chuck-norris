const jokeBtn = document.getElementById("joke-btn");
const joke = document.getElementById("joke-container");
const clear = document.getElementById("clear");
const like = document.getElementById("like");
const copy = document.getElementById("copy");
const favBtn = document.getElementById("favorites");
const favorites = document.getElementById("favorites-container");
const close = document.getElementById("close");
const favList = document.getElementById("fav-list");


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

function copyJoke() {
  navigator.clipboard.writeText(joke.innerHTML);
  alert("Joke copied to clipboard");
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

let jokes = localStorage.getItem("jokes") !== null ? localStorageJokes : [];
console.log(jokes);

function addJokeDOM(marc) {
  const favEl = document.createElement("li");
  favEl.id = `joke-${marc.id}`;
  console.log(favEl.id);

  favEl.innerHTML = `${marc.text} <button class="delete-btn" onClick="deleteFavJoke(${marc.id})"><i class="fa-solid fa-trash-can"></i></button></div>`;

  favList.appendChild(favEl);
}

function deleteFavJoke(id) {

  jokes = jokes.filter((marc) => marc.id !== id);
  console.log(jokes);

  const favEl = document.getElementById(`joke-${id}`);
  if (favEl) {
    favEl.remove();
  }

  updateLocalStorage(); 
};

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
  favorites.classList.remove("hidden");
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


// Event Listeners
jokeBtn.addEventListener("click", logJSONData);
clear.addEventListener("click", clearData);
favBtn.addEventListener("click", showFav);
close.addEventListener("click", hideFav);
like.addEventListener("click", likeJoke);
copy.addEventListener("click", copyJoke);
