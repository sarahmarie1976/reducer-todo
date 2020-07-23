export const initialState = {
    todos: [
      {
        title: "Teste",
        isDone: false
      }
    ],
    currentView: "all"
  };
  
  export default function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          todos: [
            {
              title: action.payload,
              isDone: false
            },
            ...state.todos
          ]
        };
      case "REMOVE":
        return {
          ...state,
          todos: state.todos.filter((item, index) => index !== action.payload)
        };
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo, index) => {
            if (index === action.payload) {
              return {
                title: state.todos[action.payload].title,
                isDone: !state.todos[action.payload].isDone
              };
            }
            return todo;
          })
        };
      case "CHANGE_VIEW":
        return {
          ...state,
          currentView: action.payload
        };
      default:
        return state;
    }
  }
  