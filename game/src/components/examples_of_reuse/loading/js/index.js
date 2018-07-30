import './../../../../css/main.css';
import './../css/style.css';
import './../../../loading/css/loading.css';
import {createLoadingPage, preloadImages, removeLoading} from './../../../loading/loading';
let exampleSources = [
  'img/1.png',
  'img/2.jpg',
  'img/3.png',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

createLoadingPage();
preloadImages(exampleSources, removeLoading);

let exampleImages = document.createElement('img');
exampleImages.id = 'exampleImages';
exampleImages.src = exampleSources[0];
exampleImages.classList.add('example_images');
example.appendChild(exampleImages);

let nextImage = document.createElement('div');
nextImage.id = 'nextImage';
nextImage.classList.add('controls');
nextImage.innerHTML = '<i class="fa fa-chevron-circle-right"></i>';
example.appendChild(nextImage);

let prevImg = 0;
function changeImage(quantity, imgID) {
  let currentImage = (quantity + prevImg + 1) % quantity;
  imgID.setAttribute('src', `${exampleSources[currentImage]}`);
  prevImg = currentImage;
}

nextImage.onclick = () => {
  changeImage(exampleSources.length, exampleImages);
};
