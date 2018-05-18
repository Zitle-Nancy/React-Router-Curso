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
]
// asi creamos nuestro store 
const store = createStore(
  (state) => state,   // reducer
  initialState, // preloadstate
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhancer
);
// print the result in the body 
const $container = document.getElementById('container');
const playList = store.getState();
playList.forEach( (item)=>{
  // console.log(item, 'elementos');
  const p = document.createElement('p');
  p.innerText = item.title;
  $container.appendChild(p);
})
// console.log(store.getState());