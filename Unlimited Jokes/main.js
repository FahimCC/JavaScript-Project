const jokeBtn = document.querySelector('#jokeBtn');
const joke = document.querySelector('#joke');

//* Promises

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('http://icanhazdadjoke.com/', setHeader)
//     .then(response => response.json())
//     .then(data => {
//       joke.innerHTML = data.joke;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

//* async await

// const generateJokes = async () => {
//   try {
//     const setHeader = {
//       headers: {
//         Accept: 'application/json',
//       },
//     };
// const response = await fetch('https://icanhazdadjoke.com/', setHeader);
//     const data = await response.json();
//     joke.innerHTML = data.joke;
//   } catch (error) {
//     console.log(`The error is ${error}`);
//   }
// };

//* AJAX call using XMLHttpRequest

const generateJokes = () => {
  try {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://icanhazdadjoke.com/');
    request.setRequestHeader('Accept', 'application/json');
    request.send();
    request.addEventListener('load', function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        joke.innerHTML = data.joke;
      }
    });
  } catch (error) {
    console.log(`The error is ${error}`);
  }
};

jokeBtn.addEventListener('click', generateJokes);
generateJokes();
