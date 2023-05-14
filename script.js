const jokeBtn = document.getElementById('joke-btn');
const joke = document.getElementById('joke-container');
const clear = document.getElementById('clear');


async function logJSONData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await response.json();
    // console.log(jsonData);

    joke.classList.remove('hidden');
    clear.classList.remove('hidden');
    joke.innerHTML = jsonData.value
    
  };

  function clearData() {
    joke.innerHTML = ''
    joke.classList.add('hidden');
    clear.classList.add('hidden');
  }


  jokeBtn.addEventListener('click', logJSONData);
  clear.addEventListener('click', clearData);

  