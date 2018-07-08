import {numbers} from './number';
import Task from './../task';
export default class TranslateNumber extends Task {
  constructor(){
    super();
    this.randomIndex = Math.floor(Math.random()*numbers.length);
  }
  buildTranslateNumber() {
    super.createWrapper();
    title.innerHTML = 'Write the number in English:';

    let number = document.createElement('label');
    number.setAttribute('id','number');
    task.appendChild(number);

    super.createInputForAnswer();

    let numberInput = numbers[this.randomIndex].onscreen;
    let translate = numbers[this.randomIndex].translate;
    number.innerHTML = numberInput;

    super.createCheckButton();
    let checkTask = super.checkTask;
    button.onclick = function (event) {
      event.preventDefault();
      checkTask(translate.indexOf(answer.value) !== -1);
    }
  }
}
