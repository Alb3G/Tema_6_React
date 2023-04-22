Ejercicio 3 – Agenda
1. Crear un nuevo proyecto React y limpiamos lo que no nos haga falta. (Hecho)

2. Nuestra App contendrá dos componentes: una agenda y un formulario, cada uno en su archivo. (Hecho)

3. Al nivel de la App, definiremos un array de contactos que serán objetos con la siguiente información:
• Nombre, Apellidos, Dirección, Ciudad, Código Postal y teléfono.
Crear 3 contactos iniciales. (Hecho)

4. Crear el componente agenda que recibirá por props todos los contactos y devolverá una ul por cada
uno. La ul tendrá tantos li como datos tenga el contacto. Los li se pueden hardcodear o hacer dinámicos. (Hecho)

5. Crear la estructura del formulario en el componente, aún sin lógica. (Hecho)

6. Cambiar el array de contactos para que pase a ser un estado con su valor inicial. (hook useState).
Pasar el array por props al componente agenda y deberá funcionar igual que el Apartado 4. (Hecho)

7. Dentro del componente del formulario, crearemos tantos hooks de useState como inputs tenga. Iremos
actualizando los estados con los eventos change de los inputs de manera individual. (Hecho)

8. Cuando se produzca el submit en el form:
1. Evitaremos el comportamiento por defecto. (Hecho)
2. Crearemos un nuevo objeto con la información de todos los estados (inputs) en ese momento. (Hecho)
3. Llamaremos a la función que modifica el estado de los contactos (apartado 3) y le pasaremos el (Hecho)
.  array tras añadirle el nuevo objeto. (Hecho)
4. Vaciaremos los campos del formulario. (Hecho)

9. Avanzado: Cada lista (contacto) tendrá un botón que eliminará dicho contacto del array global. (Hecho)

Nota: Para añadir un nuevo elemento a la lista, se puede utilizar el operador spread (...) : 
setContactos(contactosActual => […contactosActual, nuevoContacto]);