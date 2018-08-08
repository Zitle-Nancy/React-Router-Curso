function data(state, action){
  /**
   * @description action.type
   * Siempre es el que debemos utilizar como defecto
   * dentro de nuestros reducer
   */
  switch(action.type){
    case 'SEARCH_VIDEO': {
      /**
       * @description results
       * preguntar si se pueden concatenar estas funciones
       * y porque el return no funciona
       */
      const results = state.data.categories.map( list =>{
        return list.playlist.filter( item =>{
          // console.log(item.author);
          // console.log(item.author.includes(action.payload.query));
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