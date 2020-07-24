



export const reducer = (state, action) => {
	switch (action.type) {
		// do something with the action
		case 'ADD':
			return [
				...state,
				{
					id: Date.now(),
          name: action.name,
				},
      ];
      
    case 'TOGGLE_COMPLETED':
      return state.map((todo, index) =>
        (index === action.index)
          ? { ...todo, completed: !todo.completed } 
          : todo
      )

    case 'SET_VISIBILITY_FILTER':
      return state.filter(todo => !todo.completed);
        

		case 'REMOVE':
			return state.filter((_, index) => index !== action.index);
		default:
			return state;
	}
};
  