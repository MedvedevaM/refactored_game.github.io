import './css/matching_words.css';
import {vocabulary} from './../vocabulary';
import Task from './../task';
import {shuffleArray} from './shuffle_array';
export default class MatchingWords extends Task {
  constructor() {
    super();
    this.words = [];
    this.translates = [];
    this.shuffledArr = [];
  }
  buildTask() {
    super.createWrapper();
    title.innerHTML = 'Match the words';

    while (this.words.length !== 5) {
      let randomNumber = Math.floor(Math.random()*(vocabulary.length));
      if (this.words.indexOf(vocabulary[randomNumber].word) === -1) {
        this.words.push(vocabulary[randomNumber].word);
        this.translates.push(vocabulary[randomNumber].translate[0]);
        this.shuffledArr.push(vocabulary[randomNumber].translate[0]);
      }
    }
    shuffleArray(this.shuffledArr);

    let container = document.createElement('div');
    container.style.display = 'flex';
    task.appendChild(container);

    let listOfWords = document.createElement('ul');
    listOfWords.setAttribute('id', 'listOfWords');
    listOfWords.classList.add('listOfWordsToMatch');
    container.appendChild(listOfWords);

    let listOfTranslate = document.createElement('ul');
    listOfTranslate.setAttribute('id', 'listOfTranslate');
    listOfTranslate.classList.add('listOfWordsToMatch');
    container.appendChild(listOfTranslate);

    for (let i = 0; i < 5; i++) {
      let liWithWord = document.createElement('li');
      liWithWord.innerHTML = this.words[i];
      listOfWords.appendChild(liWithWord);
      let liWithTranslate = document.createElement('li');
      liWithTranslate.setAttribute('tabindex', '1');
      liWithTranslate.innerHTML = this.shuffledArr[i];
      listOfTranslate.appendChild(liWithTranslate);
    }

    $(function() {
        $('#listOfTranslate').sortable();
        $('#listOfTranslate').disableSelection();
      });

    let matchWordsWithKeyboard = super.collectMixedWithKeyboard;

    listOfTranslate.addEventListener('focusin', () => {
      document.activeElement.addEventListener('keydown', matchWordsWithKeyboard)
    });

    listOfTranslate.addEventListener('focusout', () => {
      document.activeElement.removeEventListener('keydown', matchWordsWithKeyboard);
    });
  }

  createChecking() {
    super.createCheckButton();
    let translates = this.translates;
    let checkTask = super.checkTask;
    button.onclick = function () {
      event.preventDefault();
      let answers = Array.from(document.getElementsByTagName('li')).slice(5);
      let rightAnswer;
      for (let i = 0; i < 5; i++) {
        if (answers[i].innerHTML === translates[i]) {
          rightAnswer = true;
        } else {
          rightAnswer = false;
          break;
        }
      }
      checkTask(rightAnswer);
    }
  }

  init() {
    this.buildTask();
    this.createChecking();
  }
}
