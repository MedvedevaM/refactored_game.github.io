import './css/game.css';
import Enemy from './../enemy/enemy';
import {createSkillBoard} from './../../../components/modal-dialog/skills';
import {addEventsOnSkills} from './../../../components/modal-dialog/events_for_skills';
import {gameover} from './../gameover/gameover';
export default class Game {
  constructor() {
    this.background = `background: url('src/screens/battle/game/img/backgrounds/background_${Math.ceil(Math.random()*7)}.png') repeat bottom / cover;`;
  }
  startGame() {
    game.setAttribute('style', this.background);

    let lifeOfPlayer = document.createElement('div');
    lifeOfPlayer.id = 'lifeOfPlayer';
    lifeOfPlayer.classList.add('quantity_of_lost_life');
    lifeOfPlayer.classList.add('quantity_of_lost_life_of_player');
    lifeOfPlayer.innerHTML = '100/100';
    game.appendChild(lifeOfPlayer);

    let lifeOfEnemy = document.createElement('div');
    lifeOfEnemy.id = 'lifeOfEnemy';
    lifeOfEnemy.classList.add('quantity_of_lost_life');
    lifeOfEnemy.classList.add('quantity_of_lost_life_of_enemy');
    lifeOfEnemy.innerHTML = '100/100';
    game.appendChild(lifeOfEnemy);

    let finishGame = document.createElement('button');
    finishGame.setAttribute('id', 'finishGame');
    finishGame.classList.add('finish_game_button');
    finishGame.innerHTML = 'Finish game';
    game.appendChild(finishGame);

    finishGame.onclick = () => {
      gameover();
    }

    let enemy = new Enemy();
    enemy.buildEnemy();

    createSkillBoard();
    addEventsOnSkills();
  }
}
