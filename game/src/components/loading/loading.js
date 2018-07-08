import './../../../css/main.css';
import './css/loading.css';
export function createLoadingPage() {
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'loading';
  document.body.appendChild(wrapper);

  let preloader = document.createElement('div');
  preloader.classList.add(`preloader`);
  wrapper.appendChild(preloader);

  let p = document.createElement('p');
  p.innerHTML = 'LOADING';
  preloader.classList.add('title_loading');
  preloader.appendChild(p);

  for (let i = 1; i < 10; i++) {
    let line = document.createElement('div');
    line.classList.add(`line-${i}`);
    line.classList.add('line');
    preloader.appendChild(line);
  }
};

export function preloadImages(sources, callback) {
  let counter = 0;

  function onLoad() {
    counter++;
    if (counter == sources.length) callback();
  }

  for (var i = 0; i < sources.length; i++) {
    var img = document.createElement('img');
    img.onload = img.onerror = onLoad;
    img.src = sources[i];
  }
}

export function removeLoading() {
  setTimeout(() => {document.body.removeChild(loading)}, 1000);
}
