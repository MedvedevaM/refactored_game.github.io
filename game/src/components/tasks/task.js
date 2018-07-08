import './css/task.css';
import {buidAttack} from './../../screens/battle/attack/attack';
import {createCongratulations} from './../../screens/battle/congrats/congrats';
import {buidExplosion} from './../../screens/battle/explosion/explosion';
import {createSkillBoard} from './../modal-dialog/skills';
import {addEventsOnSkills} from './../modal-dialog/events_for_skills';
export default class Task {
  constructor() {
    this.condition;
  }
  createWrapper() {
    let task = document.createElement('form');
    task.id = 'task';
    task.classList.add('global_wrap');
    game.appendChild(task);

    let title = document.createElement('h1');
    title.id = 'title';
    task.appendChild(title);
  }

  createCheckButton() {
    let button = document.createElement('button');
    button.className = 'submit_task';
    button.id = 'button';
    button.innerHTML = 'Answer';
    task.appendChild(button);
  }

  createInputForAnswer() {
    let inputForAnswer = document.createElement('input');
    inputForAnswer.setAttribute('id','answer');
    inputForAnswer.classList.add('insert_word');
    inputForAnswer.setAttribute('type','text');
    task.appendChild(inputForAnswer);
    answer.focus();
  }

  collectMixedWithKeyboard(event) {
    function insertAfter(elem, refElem) {
      return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    if (document.getElementById('task')) {
      let elem = event.target;
      if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
        elem.parentElement.insertBefore(elem, elem.previousSibling);
      }
      if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
        insertAfter(elem, elem.nextSibling);
      }
      elem.focus();
    }
  }

  checkTask(condition) {
    if (condition) {
      createCongratulations();

      setTimeout(() => buidAttack('player'), 2000);

      let lostLifeArr = lifeOfEnemy.innerHTML.split(/\//g);
      setTimeout(() => {
        lifeOfEnemy.innerHTML = `${lostLifeArr[0] - 20}/100`;
        lifeOfEnemy.setAttribute('style', `background-position: ${(-368 + (100 - (lostLifeArr[0] - 20)) * 3.5)}px -57px;`);
      }, 3000);

      checkLostLifeOfEnemy();
    } else {
      buidAttack('player');
      setTimeout(() => buidAttack('enemy'), 2000);
      setTimeout(() => {
        createSkillBoard();
        addEventsOnSkills();
      }, 4000);
    }
    game.removeChild(task);

    function checkLostLifeOfEnemy() {
      let lostLifeArr = lifeOfEnemy.innerHTML.split(/\//g);
      if (lostLifeArr[0] - 20 === 0) {
        setTimeout(() => buidExplosion('enemy'), 3000);
      } else {
        setTimeout(() => buidAttack('enemy'), 4000);
        setTimeout(() => {
          createSkillBoard();
          addEventsOnSkills();
        }, 6000);
      }
    }
  }
}
