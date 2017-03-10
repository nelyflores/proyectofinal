var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
   // mostrar(estudiantes);
   return estudiantes;


    
 
    
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado


    //Declaracion de variables 
    var nombre=prompt("Nombre de la estudiante");
    var porcentaje=prompt("Porcentaje Técnico");
    var hse= prompt("Porcentaje Habilidades Socio-Emocionales");
    //Creando un objeto estudiante con propiedades nombre, porcentaje y hse.
     estudiante = {
        nombre:nombre,
        porcentaje:porcentaje,
        hse:hse
    };
    //agregamos a nuestro arreglo estudiantes el objeto 
    estudiantes.push(estudiante);
    console.log(estudiantes);
    console.log(estudiante);
    //mostrarLista(estudiantes);

    return estudiante;
   
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentaje + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
   // var res="";
    //for (var i=0; i<estudiantes.length;i++){
     //   res += mostrar(estudiantes[i]);
    //}
   // return res;
  //}      
    var res="";
    estudiantes.forEach(function(estudiante){
    res += mostrar(estudiante);
    });
    return res;
  }      
function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var buscarAlumna=estudiantes.filter(function(estudiante){
    return estudiante.nombre.toLowerCase() == nombre.toLowerCase();
    });
    return buscarAlumna;

        
    
    
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var puntosTecnicos= estudiantes.sort(function(a,b){
    return b.porcentaje - a.porcentaje
    });
   return puntosTecnicos; 
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var puntosHse = estudiantes.sort(function(a,b){
    return b. hse - a.hse;
    });
    return  puntosHse;
}
