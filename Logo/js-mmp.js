const htmlButton = document.querySelector('.html-button');
const htmlDiploma = document.querySelector('.html-button_span');
let contador = 0;

function showDiploma() {
  if (contador == 0) {
    htmlDiploma.classList.remove('inactive');
    contador = 1;
  } else {htmlDiploma.classList.add('inactive')};
          contador = 0;
 }

htmlButton.addEventListener('click', showDiploma, true)



