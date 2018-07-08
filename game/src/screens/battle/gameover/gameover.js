import './css/gameover.css';
import {createRatingTable, createPopupWindow, closeRating} from './../../rating/rating';
import Registration from './../../registration/registration';
export function gameover() {
  game.innerHTML = '';
  let wrapper = document.createElement('div');
  wrapper.id = 'gameOverWrapper';
  wrapper.classList.add('global_wrap');
  game.appendChild(wrapper);

  let h1 = document.createElement('h1');
  h1.classList.add('gameover_text');
  h1.innerHTML = 'GAME OVER';
  wrapper.appendChild(h1);

  let h2 = document.createElement('h2');
  h2.classList.add('gameover_text');
  let arrayOfUsers = JSON.parse(localStorage.getItem('arrayOfUsers'));
  h2.innerHTML = `Killed enemies: ${arrayOfUsers[arrayOfUsers.length - 1].killedEnemies}`;
  wrapper.appendChild(h2);

  let registationPage = document.createElement('button');
  registationPage.setAttribute('id', 'registation_page');
  registationPage.innerHTML = 'Registration page';
  registationPage.classList.add('game_over_button');
  wrapper.appendChild(registationPage);

  let buttonRating = document.createElement('button');
  buttonRating.setAttribute('id', 'buttonRating');
  buttonRating.classList.add('game_over_button');
  buttonRating.innerHTML = 'Watch rating';
  wrapper.appendChild(buttonRating);

  buttonRating.onclick = function (event) {
    event.preventDefault();
    createRatingTable();
  }

  registation_page.onclick = function (event) {
    event.preventDefault();
    game.removeChild(gameOverWrapper);
    let registation = new Registration;
    registation.initialize();
  }
}
