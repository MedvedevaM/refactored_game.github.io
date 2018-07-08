import './css/drag_n_drop_task.css';
import {vocabulary} from './../vocabulary';
import Task from './../task';
export default class DragNDropTask extends Task {
  constructor() {
    super()
    this.word = vocabulary[Math.floor(Math.random()*(vocabulary.length))].word;
  }
  buildTask() {
    super.createWrapper();
    title.innerHTML = 'Restore the mixed word';

    let shuffledWord = '';
    function shuffleWord(wordToShuffle) {
        let currentLetter = wordToShuffle.length - 1;
        let randomLetter;
        while (currentLetter >= 0) {
            randomLetter = Math.floor(Math.random() * currentLetter);
            shuffledWord += wordToShuffle[randomLetter];
            wordToShuffle = wordToShuffle.slice(0, randomLetter) + wordToShuffle.slice(randomLetter + 1);
            currentLetter--;
        }
    };

    shuffleWord(this.word);
    while (shuffledWord === this.word) {
      shuffledWord = '';
      shuffleWord(this.word);
    }

    let listOfMixedLetters = document.createElement('ul');
    listOfMixedLetters.setAttribute('id', 'listOfMixedLetters');
    listOfMixedLetters.classList.add('listOfMixedLetters');
    task.appendChild(listOfMixedLetters);

    let shuffledWordLength = shuffledWord.length;
    for (let i = 0; i < shuffledWordLength; i++) {
      let liWithLetter = document.createElement('li');
      liWithLetter.setAttribute('tabindex', '1');
      liWithLetter.innerHTML = shuffledWord[i];
      listOfMixedLetters.appendChild(liWithLetter);
    }

    $(function () {
        $( "#listOfMixedLetters" ).sortable();
        $( "#listOfMixedLetters" ).disableSelection();
      });

    let collectWordWithKeyboard = super.collectMixedWithKeyboard;

    listOfMixedLetters.addEventListener('focusin', () => {
      document.activeElement.addEventListener('keydown', collectWordWithKeyboard)
    });

    listOfMixedLetters.addEventListener('focusout', () => {
      document.activeElement.removeEventListener('keydown', collectWordWithKeyboard);
    });

    super.createCheckButton();
    let checkTask = super.checkTask;
    let word = this.word;

    button.onclick = function (event) {
      event.preventDefault();
      let letters = Array.from(document.getElementsByTagName('li'));
      let collectedWord = '';
      for (let i = 0; i < letters.length; i++) {
        collectedWord += letters[i].innerHTML;
      }
      checkTask(word === collectedWord);
    }
  }
}
