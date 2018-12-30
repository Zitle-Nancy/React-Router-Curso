/**
 * @function data
 * @augments state, action
 * Itera sobre nuestra Json para obtener 
 * match con la busqueda del usuario
*/

function data(state, action){
  switch(action.type){
    case 'SEARCH_VIDEO': {
      const results = state.data.categories.map( list =>{
        return list.playlist.filter( item =>{
          console.log(item.author)
          return item.author.includes(action.payload.query);
        }) 
      })
      return {
        ...state,
        search:results
      }
    }
    default:
      return state
  }
}
export default data;