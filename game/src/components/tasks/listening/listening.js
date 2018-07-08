import './css/listening.css';
import {vocabulary} from './../vocabulary';
import Task from './../task';
export default class ListeningTask extends Task {
  constructor() {
    super();
    this.word = vocabulary[Math.floor(Math.random()*(vocabulary.length))].word.toUpperCase();
  }
  createListening() {
    super.createWrapper();
    task.classList.add('grid');
    title.innerHTML = 'Enter the word you hear';

    let speakButton = document.createElement('div');
    speakButton.setAttribute('tabindex', '1');
    speakButton.classList.add('listen_word');
    speakButton.id = 'speak_button';
    speakButton.innerHTML = 'Listen';
    task.appendChild(speakButton);

    super.createInputForAnswer();

    let word = this.word;
    speak_button.onclick = (event) => {
      responsiveVoice.speak(word);
    }
    speak_button.onkeydown = (event) => {
      if (event.code == 'Enter') responsiveVoice.speak(word);
    }

    super.createCheckButton();

    let checkTask = super.checkTask;
    button.onclick = (event) => {
      event.preventDefault();
      checkTask(word === answer.value.toUpperCase());
    }
  }
}
