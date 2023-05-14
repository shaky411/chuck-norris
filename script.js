const jokeBtn = document.getElementById('joke-btn');
const joke = document.getElementById('joke-container');


async function logJSONData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await response.json();
    // console.log(jsonData.value);

    joke.classList.remove('hidden');
    joke.innerHTML = jsonData.value
    
  };


  jokeBtn.addEventListener('click', logJSONData);