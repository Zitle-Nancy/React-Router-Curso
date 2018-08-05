function data(state, action){
  /**
   * @description action.type
   * Siempre es el que debemos utilizar como defecto
   * dentro de nuestros reducer
   */
  switch(action.type){
    case 'SEARCH_VIDEO': {
      const list = state.data.categories[2].playlist;
      const results = list.filter((item)=>{
        return item.author.includes(action.payload.query);
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