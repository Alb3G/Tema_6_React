1. Crear un nuevo proyecto React y limpiar lo que no nos haga falta.(Hecho)

2. Instalaremos las dependencias que puedan tener los ejercicios anteriores, como Bootstrap. Además,
instalaremos react-router-dom, que nos permitirá usar BrowserRouter, Route, Switch y NavLink.(Hecho)

3. Crearemos dos carpetas, una para los componentes y otra para las páginas.(Hecho)

4. Dentro de la carpeta componentes incluiremos todos los componentes utilizados en los ejercicios anteriores. (Hecho)

5. Dentro de la carpeta páginas incluiremos un componente por cada ejercicio, que corresponderá a cada
App.js. (Cuidado con los imports y sus rutas relativas, probablemente cambiarán y habrá que actualizarlas). (Hecho)

6. En nuestra App.js utilizaremos el componente <BrowserRouter> que rodeará tantos los enlaces como las
rutas.(Hecho)

7. Dentro del BrowserRouter, habrá tantos <NavLinks> como páginas tengamos, cada uno con su atributo to correspondiente a su ruta, ruta que decidiremos nosotros.(Hecho)

8. También dentro de BrowserRouter, incluiremos tantos componentes <Route> como páginas tengamos, especificando los atributos path (a coincidir con “to” del enlace) y component. Notas:

• Podemos escribir exact tanto en los enlaces como en las rutas si queremos que la coincidencia deba ser la
ruta idéntica.

• En NavLink tenemos disponible el atributo activeClassName para que aplique clases CSS cuando el link esté activo.