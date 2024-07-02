LEER SOLAMENTE LA BRANCH MAIN

Para usar el programa: 
1.

a) Si se quiere INGRESAR los datos de una sonda, en el ThunderClient usar el URL : http://localhost:8080/sondas con POST, y en Form-Encode poner a la izq. id y temperatura, y a la derecha sus respectivos datos.

b) Si se quiere LISTAR los datos de todas las sondas, en el ThunderClient usar el URL : http://localhost:8080/sondas con GET.

c) Si se quiere LISTAR los datos de UNA sonda por ID, en el ThunderClient usar el URL : http://localhost:8080/sondas/1 (para obtener las medidas de la sonda con id 1) con GET.


2.
 Si se quiere LISTAR las estadisticas de las sondas, en el ThunderClient usar el URL : http://localhost:8080/sondas/estadisticas con GET.