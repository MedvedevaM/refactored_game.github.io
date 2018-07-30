import './../../css/main.css';
import './css/rating.css'
export function createRatingTable() {
  createPopupWindow();

  let arrayOfUsers = JSON.parse(localStorage.getItem('arrayOfUsers'));
  arrayOfUsers = arrayOfUsers.sort(function compareScore(userA, userB) {
    return userB.killedEnemies - userA.killedEnemies;
  });
  for (let i = 0; i < arrayOfUsers.length; i++) {
    let item = document.createElement('li');
    ratingList.appendChild(item);
    item.appendChild(document.createTextNode(`Name: ${arrayOfUsers[i].name}, killed enemies: ${arrayOfUsers[i].killedEnemies}`));
  }
}

export function createPopupWindow() {
  let popup = document.createElement('div');
  popup.classList.add('popup');
  popup.setAttribute('id', 'popup');
  game.appendChild(popup);

  let rating = document.createElement('h2');
  rating.innerHTML = 'Rating list:';
  popup.appendChild(rating);

  let ratingList = document.createElement('ol');
  ratingList.id = 'ratingList';
  popup.appendChild(ratingList);

  let cross = document.createElement('span');
  cross.classList.add('cross');
  cross.id = 'cross';
  cross.innerHTML = '×';
  popup.appendChild(cross);

  cross.onclick = closeRating;
  document.addEventListener('keydown', (event) => {
    if (document.getElementById('cross') && event.code == 'Escape') {
      closeRating();
    }
  });
}

export function closeRating() {
  game.removeChild(popup);
}
