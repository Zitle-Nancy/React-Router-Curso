import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit',handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');

  // esta es nuestra acción
  store.dispatch({
    type:"ADD_SONG",
    playload:{
      title
    }
  })
  console.log(title);
}
const initialState = [
  {
    "title":"despacito"
  },
  {
    "title":"hechame la culpa"
  },
  {
    "title":"aquí estoy yo"
  }
];

const reducer = function(state,action){
  switch(action.type){
    case 'ADD_SONG':
    return [...state, action.playload]
    default:
    return state
  }
}
// asi creamos nuestro store 
const store = createStore(
  // (state) => state,   // reducer
  reducer, // la forma correcta de poner reducer
  initialState, // preloadstate
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhancer
);
// print the result in the body 
function render(){
  const $container = document.getElementById('container');
  const playList = store.getState();
  $container.innerHTML = " "; // limpia la lista que se ha imprimido y por ende solo te va a mostrar la nueva cancion que agregue
  playList.forEach( (item)=>{
    // console.log(item, 'elementos');
    const p = document.createElement('p');
    p.innerText = item.title;
    $container.appendChild(p);
  });
}

function handleChange(){
  render();
}

// con esto actualizamos nuestra aplicación
store.subscribe(handleChange);
// console.log(store.getState());