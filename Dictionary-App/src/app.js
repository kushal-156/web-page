
const btn = document.getElementById('btn');
const input = document.getElementById('search');
const display = document.querySelector('.details');
const sound = document.getElementById('sound'); // selecting audio

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const loadWord = async function () {
  try {
    const res = await fetch(`${url}${input.value}`);
    const data = await res.json();
    console.log(data);
    // after loading empty input
    input.value = '';
    sound.setAttribute('src', `${data[0].phonetics[0].audio}`);

    // showing on display
    display.innerHTML = ` <div class="words-sound">
  <h3 class="word">
     ${data[0].word}
  </h3>
<button class="voice" onclick="playSound()"> <i class="ri-volume-up-fill"></i></button>
 </div>
 <div class="description">
     <div class="Prons">
         <p class="parts-Of-Speech">${data[0].meanings[0].partOfSpeech}</p>
        <p class="pronounce"> ${data[0].phonetics[0].text || ''} </p>
      </div>
     <div class="meaning">
     ${data[0].meanings[0].definitions[0].definition}
     </div>
     <div class="Example">
         ${data[0].meanings[0].definitions[0].example || ''}
     </div>

 </div>`;
  } catch (Error) {
    display.innerHTML = `<h3 class="error">Word not Found.</h3> `;
  }
};
// Sound will play when we click on voice button that is added in literal
const playSound = function () {
  // to play sound
  sound.play();
};

btn.addEventListener('click', loadWord);
