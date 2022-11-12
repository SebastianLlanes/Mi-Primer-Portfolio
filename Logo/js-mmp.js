 const htmlButton = document.querySelector('.html-button');
 const htmlDiploma = document.querySelector('.html-button_span');
 let contador = 0;

  function showDiploma() {
        if (contador == 0) {
              htmlDiploma.classList.remove('inactive');
              contador = 1;
        } else {htmlDiploma.classList.add('inactive');
                contador = 0;
            }
        }
 


const html = document.getElementsByClassName('.diploma-html')
const css = document.getElementsByClassName('.diploma-css')
const git = document.getElementsByClassName('.diploma-git')
const js = document.getElementsByClassName('.diploma-js')

let diploma = [html, css, git, js]

const htmllButton = document.getElementsByClassName('.primer-boton')
const cssButton = document.getElementsByClassName('.segundo-boton')
const gitButton = document.getElementsByClassName('.tercer-boton')
const jsButton = document.getElementsByClassName('.cuarto-boton')

let botones = [htmlButton, cssButton, gitButton, jsButton]


htmlButton.addEventListener('click', showDiploma, true)

 