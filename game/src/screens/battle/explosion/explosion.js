import './css/explosion.css';
import {gameover} from './../gameover/gameover';
export function buidExplosion(character) {
  let explosionWrapper = document.createElement('div');
  explosionWrapper.id = 'explosionWrapper';
  explosionWrapper.classList.add('explosion_wrapper');
  game.appendChild(explosionWrapper);

  if (character === 'player') {
    explosionWrapper.classList.add('explosion_player');
  }
  if (character === 'enemy') {
    explosionWrapper.classList.add('explosion_enemy');
  }

  let frames = 1;
  function animateExplosion() {
    if (character === 'player') {
      explosionWrapper.setAttribute('style', `background-position: -150px ${- frames * 580}px;`);
    }
    if (character === 'enemy') {
      explosionWrapper.setAttribute('style', `background-position: -80px ${- frames * 580}px;`);
    }

    frames++;
    if (frames > 5) {
      frames = 1;
    }
  }
  setInterval(animateExplosion, 200);

  setTimeout(() => {
    clearInterval(animateExplosion);
    game.removeChild(explosionWrapper);
    if (character === 'enemy') {
      removeEnemy();
    }
    if (character === 'player') {
      removePlayer();
      setTimeout(() => {
        gameover();
      }, 1000);
    }
  }, 2000);
}

function removeEnemy() {
  game.removeChild(enemyHead);
  game.removeChild(enemyBody);
  game.removeChild(enemyLegs);
  game.removeChild(enemyWeapon);
}

function removePlayer() {
  game.removeChild(playerHead);
  game.removeChild(playerBody);
  game.removeChild(playerLegs);
}
