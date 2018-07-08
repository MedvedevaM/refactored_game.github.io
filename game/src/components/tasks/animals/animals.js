import './css/animals.css';
import Task from './../task';
export default class AnimalTask extends Task {
  constructor() {
    super();
    this.animals = ['elephant','leopard','lion','rabbit','zebra', 'bat', 'bear', 'beaver', 'cat', 'chicken', 'cow', 'crab', 'dog', 'goose', 'horse', 'kangaroo', 'koala', 'monkey', 'squirrel', 'tiger', 'wolf'];
    this.randomAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
  }
  createAnimalTask() {
    super.createWrapper();
    title.innerHTML = 'Who is it?';

    let imgOfAnimal = document.createElement('img');
    imgOfAnimal.setAttribute('src',`src/components/tasks/animals/img/${this.randomAnimal}.png`);
    imgOfAnimal.classList.add('image_of_animal');
    task.appendChild(imgOfAnimal);

    super.createInputForAnswer();

    super.createCheckButton();
    let rightAnswer = this.randomAnimal;
    let checkTask = super.checkTask;
    button.onclick = function (event) {
      event.preventDefault();
      checkTask(answer.value === rightAnswer);
    }
  }
}
