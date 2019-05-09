/* 
DWEC Tarea6: Tablero de dibujo en Javascript
Autor: Iker Macaya Faber
*/

// Funcion Cross-Browser para añadir Eventos
var crearEvento = function()
{
    function w3c_crearEvento(elemento, evento, mifuncion)
    {
        elemento.addEventListener(evento, mifuncion, false);
    }
    function ie_crearEvento(elemento, evento, mifuncion)
    {
        var fx = function(){mifuncion.call(elemento);};
        // En IE usaremos attachEvent
        elemento.attachEvent('on' + evento, fx);
     }
     if (typeof window.addEventListener !== 'undefined')
     {
          return w3c_crearEvento;
     } 
     else if (typeof window.attachEvent !== 'undefined')
     {
          return ie_crearEvento;
     }
}();

function iniciar()
// Funcion con la que vamos a llamar a las funciones para dibujar el tablero
// y asignar los eventos de click correspondientes.
{     
    // LLamamos a la funcion que dibuja el tablero
    dibujarTablero();
    
    var tablaColores=document.getElementById("paleta");
    var celdasColores=tablaColores.getElementsByTagName("td");
    
    for (var i=0;i<celdasColores.length;i++)
    {
        // Al tablero le añadimos el evento click para detectar el color.
        crearEvento(celdasColores[i],"click",seleccionarColorPaleta);
    }
    // Diferenciamos el uso de Internet Explorer de otros exploradores.
    // Por defecto el color activo sera el primero.
    if (navigator.appName.indexOf("Explorer") != -1)
    {
        colorActivo=celdasColores[0].className.split(" ")[0];
    }
    else
        colorActivo=celdasColores[0].classList[0];

    var tablero=document.getElementById("tablero");
    var celdasTablero=tablero.getElementsByTagName("td");

    for (var i=0;i<celdasTablero.length;i++)
    {   
        // Al tablero le añadimos el evento click para activar/desactivar la pintura.
        crearEvento(celdasTablero[i],"click",activarPintura);
    }

    tablero=document.getElementById("tablero");
    celdasTablero=tablero.getElementsByTagName("td");

    for (var i=0;i<celdasTablero.length;i++)
    {
        // Al tablero le asignamos el evento mouseOver para pintar.
        crearEvento(celdasTablero[i],"mouseover",pintar);
    }
}

function dibujarTablero()
{
// Funcion realiza el dibujo del tablero 
// y ademas asigna los eventos de click correspondientes.

// Vamos creando la estructura de la tabla empleando el arbol de nodos del DOM.
// Creamos primero el elemento table con todos sus atributos.
var nuevaTabla=document.createElement("table");
nuevaTabla.setAttribute("border","1");
nuevaTabla.setAttribute("id","tablero");
nuevaTabla.setAttribute("class","tablerodibujo");

var tituloTabla=document.createElement("caption");
var titulo=document.createTextNode("Haga CLICK en cualquier celda para activar/desactivar el Pincel");

tituloTabla.appendChild(titulo);
nuevaTabla.appendChild(tituloTabla);

// Bucles para crear las filas y columnas de la tabla.
for (var i=1; i<=30; i++)
{
    var nuevaFila=document.createElement("tr");
    
    for (var j=1;j<=30;j++)
    {
        var nuevaCelda=document.createElement("td");
        nuevaFila.appendChild(nuevaCelda);
    }

    nuevaTabla.appendChild(nuevaFila);
}
// Añadimos la tabla al Div 
document.getElementById("zonadibujo").appendChild(nuevaTabla);
}

function seleccionarColorPaleta()
// Funcion seleccionar el color en la paleta de colores
{
    // Recorremos la tabla de colores para encontrar la clase seleccionada y desactivarla
    for (var i=0; i<this.parentNode.childNodes.length;i++)
    {     
        if (navigator.appName.indexOf("Explorer") != -1)
        {
            this.parentNode.childNodes[i].className = this.parentNode.childNodes[i].className.replace(/\bseleccionado\b/,'');
        }
        else
            this.parentNode.childNodes[i].classList.remove("seleccionado");
     }
    // Asignamos el color activo a la clase correspondiente.
    // Diferenciamos el uso de Internet Explorer de otros exploradores.
    if (navigator.appName.indexOf("Explorer") != -1)
    {
        colorActivo=this.className;
        this.className+=" seleccionado";
    }
    else
    {
        colorActivo=this.classList[0];
        this.classList.add("seleccionado");
    }
}

function activarPintura()
{
    // Funcion nos permite seleccionar un color 
    // y cambiar el mensaje del pincel activado/desactivado
    if (pintarActivado)
    {
        document.getElementById("pincel").childNodes[0].nodeValue="PINCEL DESACTIVADO...";
        pintarActivado=false;
    }
    else
    {
        document.getElementById("pincel").childNodes[0].nodeValue="PINCEL ACTIVADO...";
        pintarActivado=true;
        // Diferenciamos el uso de Internet Explorer de otros exploradores.
        // Asignamos el color activado
        if (navigator.appName.indexOf("Explorer") != -1)
               this.className=colorActivo;
          else
            this.classList.add(colorActivo);
    }
}

function pintar()
{
    // Funcion que nos permite pintar sobre el tablero
    if (pintarActivado)
    {
        // Diferenciamos el uso de Internet Explorer de otros exploradores.
        // Asignamos el color activo al pincel (raton mouseOver)
        if (navigator.appName.indexOf("Explorer") != -1)
        {
            this.className=colorActivo;
        }
        else
        {
            for (var i=0;i<this.classList.length;i++)
            {
               // si habia algun color activado lo borramos.
               this.classList.remove(this.classList[i]);
            }
               this.classList.add(colorActivo);
        }
     }
}
// Variables globales de la aplicacion, para el color activo
// y activar/desactivar la pintura.
var colorActivo="";
var pintarActivado=false;
// Llamamos a la funcion iniciar()
crearEvento(window,"load",iniciar);