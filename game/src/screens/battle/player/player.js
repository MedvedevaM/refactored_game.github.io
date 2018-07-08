import './css/player.css';
export default class Player {
  constructor(name, head, body) {
    this.name = name;
    this.head = head;
    this.body = body;
  }

  buildPlayer() {
    let playerName = document.createElement('p');
    playerName.innerHTML = this.name;
    playerName.classList.add('characters_name');
    playerName.classList.add('player_name');
    game.appendChild(playerName);

    let playerHead = document.createElement('div');
    playerHead.classList.add(`player_head_${this.head}`);
    playerHead.setAttribute('id', 'playerHead');
    game.appendChild(playerHead);

    let playerBody = document.createElement('div');
    playerBody.classList.add('player_body');
    playerBody.classList.add(`player_body_${this.body}`);
    playerBody.setAttribute('id', 'playerBody');
    game.appendChild(playerBody);

    let playerLegs = document.createElement('div');
    playerLegs.classList.add('player_legs');
    playerLegs.classList.add(`player_body_${this.body}`);
    playerLegs.setAttribute('style', 'background-position: -22px -5px;');
    playerLegs.setAttribute('id', 'playerLegs');
    game.appendChild(playerLegs);

    function animatePlayer() {
      if (playerBody.style.bottom === '137px') {
        playerHead.style.bottom = '307px';
        playerBody.style.bottom = '132px';
      } else {
        playerHead.style.bottom = '312px';
        playerBody.style.bottom = '137px';
      }
    }
    setInterval(animatePlayer, 500);
  }

  addMoveability() {
    function changeDestinationOfBody(destination) {
      if (destination === 'back') {
        playerLegs.setAttribute('style', 'background-position: -27px -115px;');
      } else if (destination === 'forward') {
        playerLegs.setAttribute('style', 'background-position: -22px -5px;');
      }
      playerLegs.style.left = playerBody.style.left;
    }

    document.addEventListener('keyup', function (event) {
      if (document.getElementById('task')) {
        return false;
      }
      if (event.code === 'ArrowRight') {
        changeDestinationOfBody('forward');
      } else if (event.code === 'ArrowLeft') {
        changeDestinationOfBody('back');
      }
    });
  }

  initialize() {
    this.buildPlayer();
    this.addMoveability();
  }
}
