Tarea para DWEC06.
Detalles de la tarea de esta unidad.
Enunciado.
Queremos hacer una aplicación en JavaScript que simule un pequeño tablero de dibujo. 
Para ello tendrás que dibujar una tablero de 30 celdas x 30 celdas con cada celda de 
ancho 10 px y alto 10 px. Para realizar el tablero de dibujo tendrás que emplear obligatoriamente 
los métodos de creación de nodos del DOM. Una vez generado el tablero lo meterás dentro del DIV 
con id "zonadibujo". Además tendrás una paleta con 5 colores de dibujo 
(que ya está creada y se facilita con el código .html)

Se te facilitará un fichero .html y un fichero .css con los estilos que tendrás que utilizar. 
La programación de la aplicación JavaScript la tendrás que realizar en un fichero .js adicional.

La aplicación tendrá que ser cross-browser y funcionar perfectamente en Firefox, Google Chrome e 
Internet Explorer (versión 8 y superiores. Si tienes la versión 9 pulsando F12 podrás cambiar el modo 
de compatibilidad para chequear como se vería en la versión 8).

Si se modifican los colores programados en los estilos CSS (color1 a color 6) la aplicación tendrá que 
seguir funcionando correctamente.

La forma de funcionamiento de la aplicación será la siguiente:

Haremos click en alguno de los 5 colores de la paleta y se le asignará la clase "seleccionado".
Una vez seleccionado un color de la paleta, haremos un click en una celda (que se pintará del color activo en la paleta) 
y desde ese momento al mover el ratón por el tablero pintará del color activo todas las celdas por las que vayamos 
pasando el ratón. En el momento que volvamos a hacer click en otra celda dejará de pintar.
Podremos escoger un color diferente y repetir el proceso, incluso sobre celdas que ya han sido pintadas.
Para borrar una celda pintaremos con el color blanco de la paleta.
Cada vez que el pincel esté activado se mostrará un mensaje debajo de la paleta de colores indicando: 
PINCEL ACTIVADO o PINCEL DESACTIVADO.
Captura de cómo debería quedar la aplicación:

Tablero de dibujo realizado con JavaScript como solución de la tarea de la Unidad 6.
Criterios de puntuación. Total 10 puntos.
Los 10 puntos que tiene esta tarea están asignados de la siguiente forma:

Función cross-browser de asignación de eventos (1 punto).
Dibujar el tablero empleando métodos del DOM (2,5 puntos).
Selección del color de dibujo en la paleta y ponerlo como color activo (2 puntos).
Activar/desactivar el pincel (0,5 puntos).
Pintar (1 punto).
Que sea compatible con Internet Explorer 8 y el resto de navegadores Firefox y Google Chrome (2 puntos).
Comentarios e indentación del código (1 punto).
Recursos necesarios para realizar la Tarea.
Editor web para teclear el código de la aplicación y diferentes navegadores web para ejecutar y probar su funcionamiento y compatibilidad cross-browser.

Se facilita un fichero .zip con los ficheros necesarios para la realización de la tarea.

Fichero DWEC06_TAREA.zip con el enunciado y recursos necesarios para realizar la tarea DWEC06. (0.12 MB)
Consejos y recomendaciones.
Ya que vas a trabajar con clases CSS, te recomiendo que mires cómo acceder a las clases asignadas a un elemento usando los métodos del W3C y los métodos de Internet Explorer, si deseas conseguir que tu aplicación sea cross-browser.

Indicaciones de entrega.
Una vez realizada la tarea elaborarás un único documento donde figuren las respuestas correspondientes. El envío se realizará a través de la plataforma de la forma establecida para ello, y el archivo se nombrará siguiendo las siguientes pautas:

apellido1_apellido2_nombre_SIGxx_Tarea

Asegúrate que el nombre no contenga la letra ñ, tildes ni caracteres especiales extraños. Así por ejemplo la alumna Begoña Sánchez Mañas para la sexta unidad del MP de DWEC, debería nombrar esta tarea como...

sanchez_manas_begona_DWEC06_Tarea
