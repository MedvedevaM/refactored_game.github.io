import './../../css/main.css';
import './css/registration.css';
import {createRatingTable} from './../rating/rating';
export default class Registration {
  constructor() {
    this.name;
    this.chosenHead;
    this.chosenBody;
  }

  buildChoiceOfPlayer() {
    game.setAttribute('style', 'background-color: #c4e381;');

    let choiceOfPlayer = document.createElement('div');
    choiceOfPlayer.setAttribute('id', 'choiceOfPlayer');
    choiceOfPlayer.classList.add('choice_of_player');
    game.appendChild(choiceOfPlayer);

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Choose your character:';
    choiceOfPlayer.appendChild(h1);

    let choiceOfHead = document.createElement('div');
    choiceOfHead.classList.add('choice_of_head');
    choiceOfPlayer.appendChild(choiceOfHead);

    let previousHead = document.createElement('span');
    previousHead.id = 'previousHead';
    previousHead.classList.add('controls');
    previousHead.innerHTML = '<i class="fa fa-chevron-circle-left"></i>';
    choiceOfHead.appendChild(previousHead);

    let head = document.createElement('div');
    head.classList.add('player_head');
    head.id = 1;
    head.setAttribute('style', `background-image: url('src/screens/registration/img/head_1.png');`);
    choiceOfHead.appendChild(head);

    let nextHead = document.createElement('span');
    nextHead.id = 'nextHead';
    nextHead.setAttribute('tabindex', '1');
    nextHead.classList.add('controls');
    nextHead.innerHTML = '<i class="fa fa-chevron-circle-right"></i>';
    choiceOfHead.appendChild(nextHead);

    let choiceOfBody = document.createElement('div');
    choiceOfBody.classList.add('choice_of_body');
    choiceOfPlayer.appendChild(choiceOfBody);

    let previousBody = document.createElement('span');
    previousBody.id = 'previousBody';
    previousBody.classList.add('controls');
    previousBody.innerHTML = '<i class="fa fa-chevron-circle-left"></i>';
    choiceOfBody.appendChild(previousBody);

    let body = document.createElement('div');
    body.classList.add('player_body');
    body.id = 1;
    body.setAttribute('style', `background-image: url('src/screens/registration/img/body_1.png');`);
    choiceOfBody.appendChild(body);

    let nextBody = document.createElement('span');
    nextBody.id = 'nextBody';
    nextBody.setAttribute('tabindex', '2');
    nextBody.classList.add('controls');
    nextBody.innerHTML = '<i class="fa fa-chevron-circle-right"></i>';
    choiceOfBody.appendChild(nextBody);

    let prevPart = 0;
    function changePartsOfBody(increment, partOfPlayerInDOM, partOfPlayer) {
      let currentPart = (4 + prevPart + increment) % 4;
      partOfPlayerInDOM.id = currentPart+1;
      partOfPlayerInDOM.setAttribute('style', `background-image: url('src/screens/registration/img/${partOfPlayer}_${currentPart+1}.png');`);
      prevPart = currentPart;
    }

    previousHead.onclick = () => {
      changePartsOfBody(-1, head, 'head');
    };

    nextHead.onclick = () => {
      changePartsOfBody(1, head, 'head');
    };

    nextHead.onkeydown = (event) => {
       if (event.code == 'Enter' || event.code == 'ArrowRight') changePartsOfBody(1, head, 'head');
       if (event.code == 'ArrowLeft') changePartsOfBody(-1, head, 'head');
    }

    previousBody.onclick = () => {
      changePartsOfBody(-1, body, 'body');
    };

    nextBody.onclick = () => {
      changePartsOfBody(1, body, 'body');
    };

    nextBody.onkeydown = (event) => {
      if (event.code == 'Enter' || event.code == 'ArrowRight') changePartsOfBody(1, body, 'body');
      if (event.code == 'ArrowLeft') changePartsOfBody(-1, body, 'body');
    };
  }

  buildRegistration() {
    let usersForm = document.createElement('form');
    usersForm.classList.add('users_form');
    choiceOfPlayer.appendChild(usersForm);

    let usersName = document.createElement('input');
    usersName.setAttribute('id', 'usersName');
    usersName.setAttribute('type', 'text');
    let labelForName = document.createElement('label');
    labelForName.setAttribute('for', 'usersName');
    labelForName.innerHTML = 'Enter your name:';
    usersName.focus();

    usersForm.appendChild(labelForName);
    usersForm.appendChild(usersName);

    let buttonNewGame = document.createElement('button');
    buttonNewGame.setAttribute('id', 'play_game');
    buttonNewGame.classList.add('play_button');
    buttonNewGame.innerHTML = 'Play';
    usersForm.appendChild(buttonNewGame);

    let buttonRating = document.createElement('button');
    buttonRating.setAttribute('id', 'buttonRating');
    buttonRating.classList.add('rating_button');
    buttonRating.innerHTML = 'Watch rating';
    usersForm.appendChild(buttonRating);

    buttonRating.onclick = (event) => {
      event.preventDefault();
      createRatingTable();
    }
  }

  initialize() {
    this.buildChoiceOfPlayer();
    this.buildRegistration();
  }
}
