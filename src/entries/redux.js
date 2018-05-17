import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit',handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
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