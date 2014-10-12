
var cuadrado = document.getElementById("addLi"); //Primero hay que buscar el elemento, esto no vale: addLi.createElement
												// Declaramos esta variable fuera porque la vamos a llamar en la function

cuadrado.onclick = function () {

	var ul = document.getElementById("list");

	var EtiquetaLi = document.createElement('li') //createelement va con document, no funciona si escribo la ubicación directamente: ul.createElement
	var texto = document.createTextNode("texto nuevo")
	var cuadradito = document.createElement('div')

	EtiquetaLi.appendChild(texto);  // Ahora incluyo lo creado en su ubicación
	console.log(cuadradito)
	EtiquetaLi.appendChild(cuadradito);

	cuadradito.className = "imp-btn"

	ul.appendChild(EtiquetaLi);

	EtiquetaLi.onclick = doneUndone;

	cuadradito.onclick = bold;

	undoneTasks();
};

function bold (event){

	var li = event.target.parentNode;
	var myClases = li.classList;

	if(myClases.contains('important')) {
		myClases.remove('important');
	}else{
		myClases.add('important');
	}

}

function doneUndone (event){ //puede ser event o e

	if (event.target.nodeName != 'LI') //Evita que la función le aplique la class al div cuadradito
			return false;

	var ListaDeClases = event.target.classList;//target y event se indican en la función anterior

	if (ListaDeClases.contains('done')){
		
		ListaDeClases.remove('done');

	}else{
		ListaDeClases.add('done');
	};

	undoneTasks();

};

var removeAll = document.getElementById('removeAll');

removeAll.onclick = function (){

 	var todosLi = document.getElementsByTagName('li');

	while (todosLi.length>0){

		todosLi[0].remove()

	}

};

var removeDone = document.getElementById('removeDone');

removeDone.onclick = function () {

	var done = document.getElementsByClassName('done')
	while (done.length > 0) {
		done[0].remove();
	}

}

function undoneTasks() {
  

  var liNumber = document.getElementById('list').children.length;

  var liDone = document.getElementsByClassName('done').length;

  liUndone = liNumber - liDone

  document.getElementById('undone-tasks').innerHTML = "<span>" + liUndone + "</span>";

}
window.onload=undoneTasks;


//Habrá que hacer un callback o algo; relanzar al function cuando se pulse una tarea a done







