import 'jquery';
import 'jquery-ui-bundle';
import './css/sort_numbers.css';
import Task from './../task';
export default class SortNumbers extends Task {
  constructor() {
    super();
    this.numbers = [];
  }
  buildTask() {
    super.createWrapper();
    title.innerHTML = 'Sort the numbers in ascending order';

    while (this.numbers.length < 9) {
      this.numbers.push(Math.floor(Math.random()*50));
    }

    let listOfNumbers = document.createElement('ul');
    listOfNumbers.setAttribute('id', 'listOfNumbers');
    listOfNumbers.classList.add('listOfNumbers');
    task.appendChild(listOfNumbers);

    for (let i = 0; i < this.numbers.length; i++) {
      let liWithNumber = document.createElement('li');
      liWithNumber.setAttribute('tabindex', '1');
      liWithNumber.innerHTML = this.numbers[i];
      listOfNumbers.appendChild(liWithNumber);
    }

    $(function () {
        $( "#listOfNumbers" ).sortable();
        $( "#listOfNumbers" ).disableSelection();
      });

    let sortMixedNumbers = super.collectMixedWithKeyboard;

    listOfNumbers.addEventListener('focusin', () => {
      document.activeElement.addEventListener('keydown', sortMixedNumbers)
    });

    listOfNumbers.addEventListener('focusout', () => {
      document.activeElement.removeEventListener('keydown', sortMixedNumbers);
    });

    super.createCheckButton();
    let checkTask = super.checkTask;
    let rightNumbers = this.numbers.sort((a, b) => a - b);

    button.onclick = function (event) {
      event.preventDefault();
      let sortedByPlayerNumbers = Array.from(document.getElementsByTagName('li'));
      let answer;
      for (let i = 0; i < rightNumbers.length; i++) {
        if (+sortedByPlayerNumbers[i].innerHTML === rightNumbers[i]) {
          answer = true;
        } else {
          answer = false;
        }
      }
      checkTask(answer);
    }
  }
}
