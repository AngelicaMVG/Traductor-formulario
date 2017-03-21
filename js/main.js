var boton = document.getElementsByClassName('btn')[0];
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
function translate(){
  var title = document.getElementById('form-signin-heading');
  var remember = document.getElementsByTagName('span')[0];

  title.innerHTML = 'Por favor Inicia Sesion';
  email.placeholder = ' Introduce tu Email';
  password.placeholder = 'Contrasena';
  remember.innerHTML= 'Recordar datos';
  boton.innerHTML = 'Inicia Sesion';

};
translate()

function mostrar(){
  var h3 = document.getElementById('res');
  var h4 = document.getElementById('total');
  h3.innerHTML = 'Datos del Formulario';
  h4.innerHTML ="El email ingresado es:</br> " + email.value + '</br>'+ 'La clave ingresada es: </br>'+ password.value;
};
//Esta aun no funciona correctamente
/*function mostrarDatos(e){
  e.preventDefault();
  var div = document.getElementsByClassName('container')[0];
  var h3= document.createElement('h3');
  var p = document.createElement('p');
  h3.innerHTML= 'Datos de formulario';
  p.innerHTML = "El email ingresado es:</br> " + email.value + '</br>'+ 'La clave ingresada es: </br>'+ password.value;
  div.appendChild(h3);
  div.appendChild(p);
}
boton.addEventListener('click', mostrarDatos);*/
