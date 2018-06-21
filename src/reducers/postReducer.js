
export default function postReducer(state = [], action){
  switch(action.type){
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
    console.log(state.filter(post => post.id !== action.payload.id, 'delete post'));
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}
