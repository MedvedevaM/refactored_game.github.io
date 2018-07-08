import './css/attack.css';
import {buidExplosion} from './../explosion/explosion';
export function buidAttack(character) {
  let fireAttackWrapper = document.createElement('div');
  let frames = 1;
  let positionY = 0;
  let fireAttackWrapperPosition = 0;

  if (character === 'enemy') {
    positionY = -270;
    fireAttackWrapperPosition = window.innerWidth - 500;
    fireAttackWrapper.style.left = `${fireAttackWrapperPosition}px`;
  }

  fireAttackWrapper.classList.add('fire_attack_wrapper');
  game.appendChild(fireAttackWrapper);

  function animateFire() {
    if (frames === 1) {
      fireAttackWrapper.setAttribute('style', `background-position: ${-55 - frames * 280}px ${positionY}px;`);
    } else {
      fireAttackWrapper.setAttribute('style', `background-position: ${-55 * frames - frames * 280}px ${positionY}px;`);
    }
    frames++;
    if (frames > 5) {
      frames = 1;
    }
  }

  setInterval(animateFire, 100);
  playSound('src/screens/battle/attack/audio/Sound_20640.mp3');
  let moveFireInterval = setInterval(moveFire, 100);

  function moveFire() {
    if (character === 'player') {
      if (fireAttackWrapperPosition > window.innerWidth - 500) {
        removeFireAttack();
      } else {
        fireAttackWrapperPosition += 95;
        fireAttackWrapper.style.left = `${fireAttackWrapperPosition}px`;
      }
    }

    if (character === 'enemy' && !!enemyBody) {
      if (fireAttackWrapperPosition < 50) {
        removeFireAttack();
        checkLostLifeOfPlayer();
      } else {
        fireAttackWrapperPosition -= 95;
        fireAttackWrapper.style.left = `${fireAttackWrapperPosition}px`;
      }
    }
  }
  function removeFireAttack() {
    clearInterval(animateFire);
    clearInterval(moveFireInterval);
    game.removeChild(fireAttackWrapper);
  }
}

function playSound(url) {
  let sound = new Audio();
  sound.pause();
  sound.currentTime = 2;
  sound.src = url;
  sound.play();
}

function checkLostLifeOfPlayer() {
  let lostLifeArr = lifeOfPlayer.innerHTML.split(/\//g);
  lifeOfPlayer.innerHTML = `${lostLifeArr[0] - 10}/100`;
  lifeOfPlayer.setAttribute('style', `background-position: -${(100 - (lostLifeArr[0] - 10)) * 3.5}px -11px;`);

  if (lostLifeArr[0] - 10 === 0) {
    buidExplosion('player');
  }
}
