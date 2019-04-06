## React-Router-Curso  por www.platzi.com/‎

### Notas:

En una SPA (Single-page application), se tiene multiples páginas pero solo se tiene un entry-point.

### React-Router

### ```<BrowserRouter>```
1. Basename
2. getUserConfirmation
3. forceRefresh
4. keyLength
5. children

### Tipos de enrutadores 

1. ```<BrowserRouter>``` : Es el enrutador que nos permitira cambiar de url,
sin actualizar la página. También se puede renderizar muchas vistas al mismo tiempo.

2. ```<HashRouter>``` : Cuando notamos una navegación con un hash, nos indica que la ruta solo funcionan en el front end

3. ```<MemoryRouter>``` : Mantiene el historial de búsqueda en memoria, ( perfecto para pruebas sin navegadores )

4. ```<StaticRouter>``` : Nunca cambia de dirección, perfecto para usar en Server Side Render

5. ```<NativeRouter>``` : Es el router que nos servirá si queremos usar React Native, Es recomendable usar en su lugar React Navigation.

### Propiedades

### ```<Link>``` nos ayuda a la navegación

😱 Si no tuvieramos un manejador de estados (redux o mobx), podemos usar el que nos brinda Route, en        ```<Link>```

1. to : Es similar a un un _href_, puede recibir un string o un objeto.

      El _string_ indica la  ruta a donde se va a dirigir
      El _Objeto_ puede recibir como propiedades:
      * _Pathname_ : Un _string_ que representa la ruta a donde se va dirigir
      * _search_ : Un _string_ que represente el query de una url.
      * _hash_ : Para poner en la url
      * _state_ : Un objeto que representa un estado en la navegación.

2. replace : Similar al _to_, pero en lugar de añadir una nueva ruta al historial de navegación, remplaza la última ruta por la nueva ruta agregada.

3. innerRef : Obtenemos el elemento HTML del componente, como si fuera un _ref_ de _React_

4. others

### ```<NavLink>``` Es similar a  _```<Link>```_ , pero cuenta con caracteristicas más poderosas


1. activeClassName: Clases de css para elementos activos.

2. activeStyle: similar a activeClassName, pero con estilos en línea.

3. isActive: es una función que se mandara cuando naveguemos a la ruta del NavLink.

4. exact: recibe un booleano, sirve para marcar si dirige a una ruta exacta.

5. strict: recibe un booleano, sirve para marcar si dirige a una ruta estricta.

6. location: sirve para poder hacer la comparación de isActive con alguna otra ruta.

### ```<Route>``` 
Nos sirve para cambiar la interfaz de acuerdo a la url que tengamos en el navegador.Algunas de sus propiedades son: 

1. component: El componente que se va a renderizar
2. path: Es la ruta en donde se va a renderizar nuestro componente.
3. render: Es otra opción para renderizar el componente pero en forma de función también puedes pasarle las props, como parametros.
4. children:Son los hijos o componentes que tenga anidados.
5. exact: Recibe un valor booleano, si le indicas que es **verdadero** solo harà **match** si la ruta coincide exactamente con la ubicación, y **no hará caso a ninguna sub-ruta**.
6. strict: Recibe un valor boolenao,  si le indicas que es **verdadero** solo hará **match** si la ruta a la que te diriges es idéntica a la ruta de Route.
7. sensitive: Recibe un booleano, si le indicas que es **verdadero** activara el **case sensitive** para la ruta.

### ```<Switch>```  
Representa el primer elemento secundario <Route> o <Redirect> que coincide con la ubicación.

### ```<Redirect>``` 
Este componente nos ayudara para realizar un redireccionamiento en el navegador, sus principales parámetros son **from** y **to** que sirven para indicar de que ruta van a redirigir hacía que ruta van a realizar el redireccionamiento.

### ```<Prompt>``` 
Este componente hace una validación antes de que el usuario deje (abandone) la página, esto es muy común cuando se esta llenando un formulario, haciendo una búsqueda, etc.
Los parámetros que recibe son: **when** el cual recibe un booleano para indicar si muestra el mensaje del navegador y **message** recibe un string que será el mensaje que le mostremos al usuario.
