import './../../css/font-awesome/css/font-awesome.min.css';
import './css/skills.css';
export function createSkillBoard() {
  let numberOfSkills = 10;
  let appendToMain = document.getElementById('game');
  let flexWrap = document.createElement('div');
  flexWrap.id = 'choiceOfSkills';
  flexWrap.className = 'flex flex_container';
  let wrapperSkills = document.createElement('div');
  flexWrap.appendChild(wrapperSkills);
  wrapperSkills.setAttribute('id','skill_board');
  wrapperSkills.className = 'flex wrap_skills';
  appendToMain.appendChild(flexWrap);
  flexWrap.appendChild(wrapperSkills);
  for (let i = 1; i <= numberOfSkills; i++) {
    let div = document.createElement('div');
    div.id = `skill_${i}`;
    div.className = `skill skill_${i}`;
    div.setAttribute('tabindex', `${i}`);
    wrapperSkills.appendChild(div);
  }
}
