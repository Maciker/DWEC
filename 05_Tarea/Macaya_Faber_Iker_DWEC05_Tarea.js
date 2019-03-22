/* 
DWEC Tarea5: Validando informacion en un formulario
Autor: Iker Macaya Faber
 */
window.onload=iniciar;
// Variable para almacenar el numero de intentos de envio del formulario, que se almacenara en un cookie.
var count = 0;
document.cookie = "contador="+count;

function iniciar (){
    // Funcion con la cual vamos a asignar eventos al formulario
    // El evento de validacion al clickar enviar
    // y dos eventos en dos campos cuando estos pierden el foco.
    document.getElementById("enviar").addEventListener("click",validarFormulario,false);
    document.getElementById("nombre").addEventListener("blur",upperName);
    document.getElementById("apellidos").addEventListener("blur",upperSurname); 
}
// funcion para validar el formulario
function validarFormulario(eventopordefecto)	
{	
        // Pediremos la confirmacion del envio al usuario y posteriormente comprobaremos todas las funciones de validacion.
	if (confirm("¿Deseas enviar el formulario?") &&validarNombre() && validarApellidos() && validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora())
            {   
                // si el usuario pulsa aceptar y todo esta bien, enviaremos el formulario.
                return true;
            }
        	else
            {	
                // si el usuario cancela el envio o alguna de las comprobaciones no son correctas, volveremos al formulario.
                // sumaremos uno al contador de intentos y lo haremos visible.
                eventopordefecto.preventDefault();
                count += 1;
                document.cookie = "contador="+count;
                document.getElementById("intentos").innerHTML = "Intento de envios del formulario: "+count;
		return false;
            }
}
// funcion que nos pondra el contenido del atributo nombre en mayusculas.
function upperName() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = nombre.toUpperCase();
}
// funcion que nos pondra el contenido del atributo apellidos en mayusculas.
function upperSurname() {
    var apellidos = document.getElementById("apellidos").value;
    document.getElementById("apellidos").value = apellidos.toUpperCase();  
}

// funcion con la que validaremos el nombre
function validarNombre() {
    // expresion regular que nos comprobara si el nombre solo tiene caracteras y un tamaño de 3 a 20.
    var exp = /[A-Za-z ]{3,20}$/g;
    if (exp.test(document.getElementById("nombre").value))
	{
            // Si lo tecleado cumple el patron, retornaremos true
            document.getElementById("nombre").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
	}
    else {
            // si el patron es incorrecto retorna false, focaliza el campo y muestra un error.
            document.getElementById("nombre").value = "error!";
            document.getElementById("nombre").focus();
            document.getElementById("nombre").className="error";
            document.getElementById("errores").innerHTML = "Error en el campo nombre. <br/> Tiene que tener una longitud de 3 a 20 caracteres y solo incluir letras.";
            return false;
        }
}

// funcion con la que validaremos el atributo apellidos
function validarApellidos() {
    // Usaremos una expresion regular igual que la anterior, solo caracteres y de 3 a 20 en longitud.
    var exp = /[A-Za-z ]{3,20}$/g;
    if (exp.test(document.getElementById("apellidos").value))
	{
            document.getElementById("apellidos").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
	}
    else {
            document.getElementById("apellidos").value = "error!";
            document.getElementById("apellidos").focus();
            document.getElementById("apellidos").className="error";
            document.getElementById("errores").innerHTML = "Error en el apellido. <br/> Tiene que tener una longitud de 3 a 20 caracteres y solo incluir letras";
            return false;
        }
}

// funcion que nos validara la edad
function validarEdad() {
    // Usaremos una expresion regular que solo permita digitos y la longitud sea de 1 a 3.
    var exp = /[0-9]{1,3}$/g;
    if (!exp.test(document.getElementById("edad").value) || document.getElementById("edad").value <0 || document.getElementById("edad").value >105  ){
            // Cuando no se cumpla alguna de las condiciones, patron o limites de edad
            // facalizaremos el campo y mostraremos un error.
            document.getElementById("edad").value = "error!";
            document.getElementById("edad").focus();
            document.getElementById("edad").className="error";
            document.getElementById("errores").innerHTML = "Error en la edad. <br/> Tiene que ser un numero entre 0 y 105";
            return false;
    }
    else {
            // si el patron es correcto y la edad esta entre 0 y 105 la daremos por valida.
            document.getElementById("edad").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
} 

// Funcion que nos va a permitir validar el NIF
function validarNif() {
    // Usaremos una expresion regular que solo permita 8 números: [0-9]{8}
    // seguido de un guion [-]
    // y que termine en letra mayuscula [A-Za-z]$
    var exp = /[0-9]{8}[-][A-Za-z]$/g;
    if (!exp.test(document.getElementById("nif").value)){
            document.getElementById("nif").value = "error!";
            document.getElementById("nif").focus();
            document.getElementById("nif").className="error";
            document.getElementById("errores").innerHTML = "Error en NIF. <br/> El formato es el siguiente 12345678-A";
            return false;
    }
    else {
            document.getElementById("nif").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}

// funcion que nos va a permitir validar el mail
function validarEmail() {
    // usaremos una expresion regular para que el mail cumpla un patron
    // \S+ que comience con una secuencia de caracteres
    // seguido de una @exp
    // para terminar dos secuencias de caracteres con un punto entre ellas: \S+\.\S+
    var exp = /\S+@\S+\.\S+/g;
    if (!exp.test(document.getElementById("email").value)){
            document.getElementById("email").value = "error!";
            document.getElementById("email").focus();
            document.getElementById("email").className="error";
            document.getElementById("errores").innerHTML = "Error en el mail, formato no correcto.";
            return false;
    }
    else {
            document.getElementById("email").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}

// Funcion para validar que se haya seleccionado una provincia.
function validarProvincia() {
    // comprobaremos que el valor del elemento provincia es igual que alguno de los valores reales, si lo es, devolvera true, si no dara error.
    if ((document.getElementById("provincia").value)!="C" && (document.getElementById("provincia").value)!="LU" && (document.getElementById("provincia").value)!="OU" && (document.getElementById("provincia").value)!="PV"){
            document.getElementById("provincia").value = "error!";
            document.getElementById("provincia").focus();
            document.getElementById("provincia").className="error";
            document.getElementById("errores").innerHTML = "Error, debes seleccionar una provincia.";
            return false;
    }
    else {
            document.getElementById("provincia").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}

// Funcion que nos va a permitir vaidar la fecha de nacimiento
function validarFecha() {
    // usaremos una expresion regular para que la fecha tenga un patron:
    // podemos teclear el día desde 01 a 31 (0[1-9]|1[0-9]|2[0-9]|3[0-1]|[1-9])
	// esta parte de la expresion nos permite teclear dias como 02, 14, 30, etc
	// [/|-] seguido de / o -
	// para terminar $, 4 digitos para indicar el año: (\d{4})
    var exp = /(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[1-9])[/|-](0[0-9]|1[0-2]|[1-9])[/|-](\d{4})$/;
    if (!exp.test(document.getElementById("fecha").value)){
            document.getElementById("fecha").value = "error!";
            document.getElementById("fecha").focus();
            document.getElementById("fecha").className="error";
            document.getElementById("errores").innerHTML = "Error en la fecha de nacimiento. <br/> Debe ser en lo siguientes formatos 00/00/0000 0 11/11/1111";
            return false;
    }
    else {
            document.getElementById("fecha").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}

// Funcion que nos va a permitir validar el telefono
function validarTelefono() {
	// Expresion regular que nos servirá de patron para comprobar que el telefono se teclea correctamente
	// de inicio ^ a fin $ tendremos 9 digitos: \d{9}
    var exp = /^\d{9}$/g;
    if (!exp.test(document.getElementById("telefono").value)){
            document.getElementById("telefono").value = "error!";
            document.getElementById("telefono").focus();
            document.getElementById("telefono").className="error";
            document.getElementById("errores").innerHTML = "Error en el telefono. <br/> Debe tener 9 digitos.";
            return false;
    }
    else {
            document.getElementById("telefono").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}

// Funcion que nos permitira validar la hora
function validarHora() {
	// usaremos un expresion regular para comprobar que la hora cumple el patron indicado:
	// podemos teclear horas de 00 a 23 (0[0-9]|1[0-9]|2[0-3]) Ej: 01 o 12 o 22
	// seguido de : [:]
	// y para terminar el numero de minutos desde 00 a 59 (0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])
    var exp = /(0[0-9]|1[0-9]|2[0-3])[:](0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])/;
    if (!exp.test(document.getElementById("hora").value)){
            document.getElementById("hora").value = "error!";
            document.getElementById("hora").focus();
            document.getElementById("hora").className="error";
            document.getElementById("errores").innerHTML = "Error en la hora. <br/> Formato no correcto Ej. 14:30";
            return false;
    }
    else {
            document.getElementById("hora").className="";
            document.getElementById("errores").innerHTML = "";
            return true;
    }
}




