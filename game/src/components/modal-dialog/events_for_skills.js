import DragNDropTask from './../tasks/drag_n_drop_task/drag_n_drop_task';
import MathTask from './../tasks/math/math';
import AnimalTask from './../tasks/animals/animals';
import ListeningTask from './../tasks/listening/listening';
import TranslateTask from './../tasks/translate_words/translate';
import MatchingWords from './../tasks/matching_words/matching_words';
import TranslateNumber from './../tasks/write_numbers/translate_number';
import TaskCapitals from './../tasks/capitals/task_capitals';
import SortNumbers from './../tasks/sort_numbers/sort_numbers';
import Area from './../tasks/area/area';

export function addEventsOnSkills() {
  function chooseSkill(event) {
    if (event.target.id === 'skill_board') {
      return;
    }
    let task;
    switch (event.target.id) {
      case 'skill_1':
        task = new DragNDropTask();
        task.buildTask();
        break;
      case 'skill_2':
        task = new MathTask();
        task.buildMathTask();
        break;
      case 'skill_3':
        task = new AnimalTask();
        task.createAnimalTask();
        break;
      case 'skill_4':
        task = new ListeningTask();
        task.createListening();
        break;
      case 'skill_5':
        task = new TranslateTask();
        task.createTranslation();
        break;
      case 'skill_6':
        task = new MatchingWords();
        task.init();
        break;
      case 'skill_7':
        task = new TranslateNumber();
        task.buildTranslateNumber();
        break;
      case 'skill_8':
        task = new SortNumbers();
        task.buildTask();
        break;
      case 'skill_9':
        task = new TaskCapitals();
        task.buildTask();
        break;
      case 'skill_10':
        task = new Area();
        task.buildTask();
        break;
    }
    game.removeChild(choiceOfSkills);
  }

  skill_board.addEventListener('click', chooseSkill);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && document.activeElement.classList.contains('skill')) {
      chooseSkill(event);
    }
  });
}
