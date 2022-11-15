  
   const html = document.querySelector('.diploma-html')
   const css = document.querySelector('.diploma-css')
   const git = document.querySelector('.diploma-git')
   const js = document.querySelector('.diploma-js')
   const rd = document.querySelector('.diploma-rd')


   const htmlButton = document.querySelector('.primer-boton')
   const cssButton = document.querySelector('.segundo-boton')
   const gitButton = document.querySelector('.tercer-boton')
   const jsButton = document.querySelector('.cuarto-boton')
   const responsiveDesign = document.querySelector('.quinto-boton')

const htmlOpen = htmlButton.addEventListener('click', () => {
   html.classList.toggle('inactive')
})

const jsOpen = jsButton.addEventListener('click', () => {
   js.classList.toggle('inactive')
})

const cssOpen = cssButton.addEventListener('click', () => {
   css.classList.toggle('inactive')
})

const gitOpen = gitButton.addEventListener('click', () => {
      git.classList.toggle('inactive')
})

const rdOpen = responsiveDesign.addEventListener('click', () => {
   rd.classList.toggle('inactive')
})
 