import Task from './../task';
export default class MathTask extends Task {
  constructor() {
    super();
  }
  buildMathTask() {
    let maxNum = 12;
    let stillPlaying = true;
    let ans;
    let correctAns = '';
    let sign;
    let num1 = 0;
    let num2 = 0;
    let prob;
    function randInt(max) {
      return Math.floor(Math.random() * max);
    }
    function getCorrectAns(n1, sign, n2) {
      switch (sign) {
        case '+':
          return n1 + n2;
        case '\u2212':
          return n1 - n2;
        case '\xD7':
          return n1 * n2;
        case '\xF7':
          return n1 / n2;
        default:
          return false;
      }
    }
    while (stillPlaying) {
      sign = ['+', '\u2212', '\xD7', '\xF7'][randInt(4)];
      num1 = randInt(maxNum + 5);
      num2 = randInt(maxNum + 5);
      if (sign == '\u2212') num1 += num2;
      if (sign == '\xF7') {
        num2 = randInt(maxNum) + 5;
        num1 *= num2;
      }
      prob = num1 + ' ' + sign + ' ' + num2;
      if (!ans) stillPlaying = false;
      correctAns = getCorrectAns(num1, sign, num2);
    }

    super.createWrapper();
    title.innerHTML = 'Solve it';

    let mathCondition = document.createElement('label');
    mathCondition.setAttribute('id','math');
    mathCondition.innerHTML = `${prob} =`;
    task.appendChild(mathCondition);

    super.createInputForAnswer();

    super.createCheckButton();
    let checkTask = super.checkTask;
    button.onclick = function (event) {
      event.preventDefault();
      checkTask(answer.value == correctAns);
    }
  }
}
