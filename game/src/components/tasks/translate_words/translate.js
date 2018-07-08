import {vocabulary} from './../vocabulary';
import Task from './../task';
export default class TranslateTask extends Task {
  constructor() {
    super();
    this.randomIndex = Math.floor(Math.random()*vocabulary.length);
    this.word = vocabulary[this.randomIndex].word;
    this.translate = vocabulary[this.randomIndex].translate;
  }
  createTranslation() {
    super.createWrapper();
    title.innerHTML = 'Try to translate it';

    let englishWord = document.createElement('label');
    englishWord.innerHTML = this.word;
    task.appendChild(englishWord);

    super.createInputForAnswer();

    let rightTranslate = this.translate;
    super.createCheckButton();
    let checkTask = super.checkTask;
    button.onclick = function (event) {
      event.preventDefault();
      checkTask(rightTranslate.indexOf(answer.value) !== -1);
    }
  }
}
