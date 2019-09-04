import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../Action/actiontype.js";
const initialState = {
  
  todos: [
    { id: 1, content: "fulfill checkpoint todo app" , isEditing:false},
    { id: 2, content: " redux part of the to do App", isEditing:false }
  ],
  id: 3, 
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        id: state.id + 1,
        todos: state.todos.concat(action.payload)
      };
    // return  {...state,todos:[...todos,action.payload]}

    case DELETE_TASK:
      return {
        ...state,
        id: state.id - 1,
        todos: state.todos.filter(el => el.id !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(el =>
          el.id === action.payload.id ? action.payload : el
        )
      };
    default:
      return state;
  }
}
export default Reducer;
