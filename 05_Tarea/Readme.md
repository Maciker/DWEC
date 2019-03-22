Tarea para DWEC05.
Detalles de la tarea de esta unidad.
Enunciado.
Realizar la validación del formulario facilitado en el enunciado, cumpliendo los siguientes requisitos:
1.	Programar el código de JavaScript en un fichero independiente. La única modificación que se 
permite realizar en el fichero .HTML es la de escribir la referencia al fichero de JavaScript.
2.	Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y 
mostrar un mensaje en el contenedor "intentos" similar a: "Intento de Envíos del formulario: X". Es decir 
cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido 
en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que 
tenemos que modificar para ese objeto es innerHTML.
3.	Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos 
campos se convertirá a mayúsculas.
4.	Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. Si se produce algún error 
mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.
5.	Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se
produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
6.	Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. 
Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF.
No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
7.	Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un 
formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco 
en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
8.	Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error mostrar el mensaje 
en el contenedor "errores" y poner el foco en el campo PROVINCIA.
9.	Validar el campo FECHA utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: 
dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún 
error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. Explicar las partes 
de la expresión regular mediante comentarios.
10.	Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. 
Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo 
TELEFONO. Explicar las partes de la expresión regular mediante comentarios.
11.	Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es 
necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el 
contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
12.	Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los 
datos; en otro caso cancelará el envío.
Criterios de puntuación. Total 10 puntos.
Los 10 puntos que tiene esta tarea están asignados de la siguiente forma:
Apartado. 1 : 0,5 puntos
Apartado. 2 : 1 puntos
Apartado. 3: 0,75 puntos
Apartado. 4: 0,5 puntos
Apartado. 5: 0,75 puntos
Apartado. 6: 1 puntos
Apartado. 7: 1,5 puntos
Apartado. 8: 0,75 puntos
Apartado. 9: 0,75 puntos
Apartado. 10: 0,75 puntos
Apartado. 11: 0,5 puntos
Apartado. 12: 0,75 puntos
<pstyle="text-align: justify;">Claridad y presentación del código, indentación...: 0,5 puntos
Recursos necesarios para realizar la Tarea.
•	Editor web para teclear el código de la aplicación y un navegador webpara ejecutar y probar la aplicación.
•	Fichero HTML con el formulario que hay que validar.
Fichero zip con el fichero html necesario para la tarea DWEC05. (0.01 MB)

Consejos y recomendaciones.
Se recomienda realizar una función para cada una de las validaciones de tal forma que se pueda llamar a 
cada una de forma independiente. Las funciones deberían devolver true si la validación ha sido correcta o 
false (y los mensajes de error solicitados) si la validación ha sido incorrecta.
Indicaciones de entrega.
Una vez realizada la tarea comprimir el fichero (en formato .zip), enviarlo a través de la plataforma de la 
forma establecida para ello, y el archivo se nombrará siguiendo las siguientes pautas:
Apellido1_Apellido2_Nombre_SIGxx_Tarea.zip
Asegúrate que el nombre no contenga la letra ñ, tildes ni caracteres especiales extraños. Así por ejemplo 
la alumna Begoña Sánchez Mañas para la quinta unidad del MP de DWEC, debería nombrar esta tarea como...
Sanchez_Manas_Begona_DWEC05_Tarea.zip
