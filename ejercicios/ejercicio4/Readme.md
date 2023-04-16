1. Crear un nuevo proyecto React y limpiar lo que no haga falta. (Hecho)

2. Nuestra App tendrá dos componentes principales: una lista de to-dos y un input para añadir uno nuevo. (Hecho)

3. Al nivel de la App, definiremos como estado un array de to-dos.
Los to-do serán objetos con la siguiente información:
• userId, title, completed 
Hacer fetch (utilizando useEffect) a https://jsonplaceholder.typicode.com/todos y actualizar el estado
con los primeros 20 elementos. (Hecho)

4. En el componente de la lista, renderizar una ul que tenga un li por cada to-do. En cada elemento estará
en primer lugar el índice del to-do y luego el título. Si se hace click en un to-do, se hará toggle sobre su
propiedad completed. Este cambio automáticamente deberá tachar el título y cambiará el estilo del fondo
y del texto. 

5. Dentro del componente del input, utilizaremos un estado para guardar lo que se introduzca por
teclado. Cuando se produzca el evento submit añadiremos el to-do al principio del array y vaciaremos
el input.

6. Avanzado: Cada to-do tendrá un botón al final del list item que lo eliminará.