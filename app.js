const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogElement = document.querySelector('.random-dogs');
const goButton = document.querySelector('.go-button')
async function getRandomDogs () {
   randomDogElement.innerHTML = '';
   const response = await fetch(API_URL);
   const json = await response.json();
   console.log(json.message);




   json.message.forEach(dogImag =>{
   const columnEelement = document.createElement('div');
   columnEelement.classList.add('column');

   const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    columnEelement.appendChild(cardElement);

    const cradImgeElement = document.createElement('div');
    cradImgeElement.classList.add('card-image');
    cardElement.appendChild(cradImgeElement);

    const figureElement = document.createElement('figure');
    figureElement.classList.add('image');
    figureElement.classList.add('is-4by3');
    cradImgeElement.appendChild(figureElement);

    const imageElement = document.createElement('img');
    imageElement.src = dogImag;
    figureElement.appendChild(imageElement);
    randomDogElement.appendChild(columnEelement)
   })
   
}

goButton.addEventListener('click', getRandomDogs)
