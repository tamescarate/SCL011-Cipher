
const next = document.getElementById('next');
const firstScreen = document.getElementById('login');
const options = document.getElementById('options');
options.style.display='none';
next.addEventListener('click', function(){
  const userName = document.getElementById('user').value;
  document.getElementById('welcome-text').innerHTML ="Bienvenido " + userName
  firstScreen.style.display = 'none';
  options.style.display = 'block';
})

const siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click', () =>{
  options.style.display = 'none';
  siguienteQuestion1.style.display = 'block';
})
  // Botón para la función de cifrar.
  const btncito = document.getElementById("btncito"); // Llama al botón del HTML.
  btncito.addEventListener("click", () => {
    
  
    
    // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let text = document.getElementById("sourceText").value; // Se guarda el valor de "source-text" en la variable "text".
    let shifts = document.getElementById("shiftNumber").value; // Se guara el valor de "shiftNumber" en la variable "shifts".
    window.cipher.encode(text, shifts); // Se mandan los valores obtenidos a la función encode.
    document.getElementById("finalTxt").innerHTML = window.cipher.encode(
      text,
      shifts
    ); // Llama el resultado de la función para ponerlo en el sector correspondiente del HTML.
  });

  //Botón para la función descifrar.
  const btnote = document.getElementById("btnote"); // Llama al botón del HTML.
  btnote.addEventListener("click", () => {
   
  
    // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let text = document.getElementById("sourceText").value; // Se guarda el valor de "source-text" en la variable "text".
    let shifts = document.getElementById("shiftNumber").value; // Se guara el valor de "shiftNumber" en la variable "shifts".
    window.cipher.decode(text, shifts); // Se mandan los valores obtenidos a la función encode.
    document.getElementById("finalTxt").innerHTML = window.cipher.decode(
      text,
      shifts
    ); // Llama el resultado de la función para ponerlo en el sector correspondiente del HTML.
  });
