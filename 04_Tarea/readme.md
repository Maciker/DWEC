Tarea para DWEC04.
Detalles de la tarea de esta unidad.
Enunciado.
Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del 
edificio y de los propietarios de cada piso. Para ello queremos almacenar la siguiente información de cada edificio:
•	calle.
•	número.
•	código postal.
•	plantas del edificio (dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos 
el nombre del propietario).
Se pide:
•	Crear un objeto que nos permita instanciar edificios. Cada vez que instanciemos un edificio le pasaremos la 
calle, número y código postal como parámetros. Se pide además crear los siguientes métodos para el objeto Edificio:

o	agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y 
el número de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas
en los parámetros, a las que ya están creadas en el edificio.
o	modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
o	modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
o	modificarCP(codigo) // Se le pasa el nuevo número de código postal del edificio.
o	imprimeCalle // Devuelve el nombre de la calle del edificio.
o	imprimeNumero // Devuelve el número del edificio.
o	imprimeCP // Devuelve el código postal del edificio.
o	agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de 
puerta y lo asignará como propietario de ese piso.
o	imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
•	Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:
o	construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.
•	Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:

o	xxxxxxxx es ahora el propietario de la puerta x de la planta x.
Aquí se muestra un ejemplo de lo que tendría que mostrar la aplicación:
Trabajando con objetos Javascript:
Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:
•	Construido nuevo edificio en: Calle Estafeta, nº: 18, CP: 31001.
•	Construido nuevo edificio en: Avenida Baja Navarra, nº: 9, CP: 31002.
•	Construido nuevo edificio en: Calle Castillo de Maya, nº: 11, CP: 31003.
•	El código postal del edificio A es: 31001.
•	La calle del edificio C es: Calle Castillo de Maya.
•	El edificio B está situado en la Avenida Baja Navarra número 9.
Agregamos 2 plantas y 3 puertas por planta al edificio A...
Agregamos 4 propietarios al edificio A...
•	Iñaki Garaio es ahora el propietario de la puerta 1 de la planta 1.
•	Paula Remírez es ahora el propietario de la puerta 2 de la planta 1.
•	Mikel Villanueva es ahora el propietario de la puerta 3 de la planta 1.
•	José Portillo es ahora el propietario de la puerta 2 de la planta 2.
Listado de propietarios del edificio Calle Estafeta número 18
•	Propietario del piso 1 de la planta 1: Iñaki Garaio.
•	Propietario del piso 2 de la planta 1: Paula Remírez.
•	Propietario del piso 3 de la planta 1: Mikel Villanueva.
•	Propietario del piso 1 de la planta 2:
•	Propietario del piso 2 de la planta 2: José Portillo.
•	Propietario del piso 3 de la planta 2:
Agregamos 1 planta más al edificio A...
Agregamos 1 propietario más al edificio A planta 3, puerta 2...
•	Xabier Gartzia es ahora el propietario de la puerta 2 de la planta 3.
Listado de propietarios del edificio Calle Estafeta número 18
•	Propietario del piso 1 de la planta 1: Iñaki Garaio.
•	Propietario del piso 2 de la planta 1: Paula Remírez.
•	Propietario del piso 3 de la planta 1: Mikel Villanueva.
•	Propietario del piso 1 de la planta 2:
•	Propietario del piso 2 de la planta 2: José Portillo.
•	Propietario del piso 1 de la planta 3:
•	Propietario del piso 2 de la planta 3: Xabier Gartzia.
Criterios de puntuación. Total 10 puntos.
Los 10 puntos que tiene esta tarea están asignados de la siguiente forma:
•	1,5 puntos por la creación del objeto Edificio.
•	2 puntos por el método agregarPlantasYPuertas(numplantas, puertas)
•	0,50 puntos por cada uno de los métodos siguientes:
o	modificarNumero(numero),
o	modificarCalle(calle),
o	modificarCP(codigo),
o	imprimeCalle(),
o	imprimeNumero(),
o	imprimeCP()
•	1 punto por la creación del método agregarPropietario (nombre, planta, puerta)
•	1,5 puntos por el método imprimePlantas()
•	1 punto adicional por la claridad y presentación del código del ejercicio, comentarios en el código y su indentación.
Recursos necesarios para realizar la Tarea.
Editor web para teclear el código de la aplicación y un navegador web para ejecutar y probar la aplicación.
Consejos y recomendaciones.
Intenta crear todos los métodos dentro del objeto Edificio y utiliza los métodos programados para imprimir el valor 
de las propiedades que se piden en el enunciado.
Indicaciones de entrega.
Una vez realizada la tarea elaborarás un único documento donde figuren las respuestas correspondientes. El envío se 
realizará a través de la plataforma de la forma establecida para ello, y el archivo se nombrará siguiendo las siguientes pautas:
apellido1_apellido2_nombre_SIGxx_Tarea
Asegúrate que el nombre no contenga la letra ñ, tildes ni caracteres especiales extraños. Así por ejemplo la alumna 
Begoña Sánchez Mañas para la cuarta unidad del MP de DWEC, debería nombrar esta tarea como...
sanchez_manas_begona_DWEC04_Tarea
