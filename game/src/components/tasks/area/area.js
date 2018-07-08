import Task from './../task';
export default class Area extends Task {
  constructor() {
    super();
    this.firstSide =  Math.ceil(Math.random() * 50);
    this.secondSide =  Math.ceil(Math.random() * 50);
  }
  buildTask() {
    super.createWrapper();

    title.innerHTML = `What is the area of a rectangle with sides ${this.firstSide} and ${this.secondSide}?`;
    let area = this.firstSide * this.secondSide;
    super.createInputForAnswer();

    super.createCheckButton();
    let checkTask = super.checkTask;
    button.onclick = (event) => {
      event.preventDefault();
      checkTask(area === +answer.value);
    }
  }
}
