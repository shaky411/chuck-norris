const jokeBtn = document.getElementById('joke-btn');
const joke = document.getElementById('joke-container');
const clear = document.getElementById('clear');
const like = document.getElementById('like');
const favBtn = document.getElementById('favorites');
const favorites = document.getElementById('favorites-container');
const close = document.getElementById('close');
const deleteFav = document.getElementById('delete-all');

const localStorageJokes = JSON.parse(localStorage.getItem('jokes'));


let jokes = 
localStorage.getItem('jokes') !== null ? 
localStorageJokes : [];

function updateLocalStorage() {
    localStorage.setItem('jokes', JSON.stringify(jokes));
}

function likeJoke() {
    jokes.push(joke.innerHTML);
    updateLocalStorage()
}

function generateID () {
    return Math.floor(Math.random() * 100000000);
}

async function logJSONData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await response.json();
    // console.log(jsonData);

    joke.classList.remove('hidden');
    clear.classList.remove('hidden');
    like.classList.remove('hidden');
    favorites.classList.add('hidden');

    joke.innerHTML = jsonData.value
    console.log(joke);
    
  };

  function clearData() {
    joke.innerHTML = ''
    joke.classList.add('hidden');
    clear.classList.add('hidden');
    like.classList.add('hidden');
  }

  function showFav() {
    favorites.classList.remove('hidden');
    joke.classList.add('hidden');
    clear.classList.add('hidden');
    like.classList.add('hidden');
  }

  function hideFav() {
    favorites.classList.add('hidden');
  }

  function deleteFavJoke() {
    localStorage.clear()
    favorites.classList.add('hidden');
  }


  jokeBtn.addEventListener('click', logJSONData);
  clear.addEventListener('click', clearData);
  favBtn.addEventListener('click', showFav);
  close.addEventListener('click', hideFav);
  like.addEventListener('click', likeJoke);
  deleteFav.addEventListener('click', deleteFavJoke);

  



  function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id
        !== id);

        updateLocalStorage();
}