const next = document.getElementById('next');
const firstScreen = document.getElementById('login');
const options = document.getElementById('options');
options.style.display='none';
next.addEventListener('click', function(){
  const userName = document.getElementById('user').value;
  document.getElementById('welcome-text').innerHTML ="Bienvenid@ " + userName;
  firstScreen.style.display = 'none';
  options.style.display = 'block';
})


const peliculas = document.getElementById('peliculas');
peliculas.addEventListener('click', () =>{
  options.style.display = 'none';
  peliculasQuestion1.style.display = 'block';
})