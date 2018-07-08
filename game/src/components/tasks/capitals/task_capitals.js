import {capitals} from './capitals';
import Task from './../task';
export default class TaskCapitals extends Task {
  constructor() {
    super();
    this.indexOfRandomCountry = Math.floor(Math.random() * capitals.length);
  }
  buildTask() {
    super.createWrapper();
    let country = capitals[this.indexOfRandomCountry].country;
    let capital = capitals[this.indexOfRandomCountry].capital;
    title.innerHTML = `What is the capital of ${country}?`;

    super.createInputForAnswer();

    super.createCheckButton();
    let checkTask = super.checkTask;
    button.onclick = (event) => {
      event.preventDefault();
      checkTask(capital.toUpperCase() === answer.value.toUpperCase());
    }
  }
}
