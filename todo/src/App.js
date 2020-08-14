import React, { useReducer, useRef } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { reducer } from './reducers/todos';
import './App.css';

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		// do something with the action
// 		case 'ADD':
// 			return [
// 				...state,
// 				{
// 					id: Date.now(),
//           name: action.name,
// 				},
//       ];
      
//     case 'TOGGLE_COMPLETED':
//       return state.map((todo, index) =>
//         (index === action.index)
//           ? { ...todo, completed: !todo.completed } 
//           : todo
//       )

//     case 'SET_VISIBILITY_FILTER':
//       return state.filter(todo => !todo.completed);
        

// 		case 'REMOVE':
// 			return state.filter((_, index) => index !== action.index);
// 		default:
// 			return state;
// 	}
// };

function ShoppingList() {
	const inputRef = useRef();
	const [items, dispatch] = useReducer(reducer, []);

	function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputRef.current.value);
		dispatch({
			type: 'ADD',
      name: inputRef.current.value,
      completed: false, 
		});
		inputRef.current.value = '';
	}

	return (
		<Form style={{ paddingTop: '10%', }}>
      <Label style={{ marginLeft: '40%', fontSize: '30px'}} >MY TODO LIST</Label> <br />
			<Form style={{  marginLeft: '40%'  }} onSubmit={handleSubmit}>
      
				<input ref={inputRef} />

			</Form>

      <FormGroup style={{ marginLeft: '40%', fontSize: '28px'  }} >
			<ul>
				{items.map((item, index) => (
          <li key={item.id}
          style={{
            textDecoration: item.completed ? 'line-through' : 'none'
          }}
          >
          {item.name} 

        <Button style={{ backgroundColor: '#ffbec9', color: '#4B0082', marginLeft: '2%'  }}
            onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', index })}>
                Completed
         </Button>  

        <Button style={{ backgroundColor: '#ffbec9', color: '#4B0082', marginLeft: '2%'  }}
            onClick={() => dispatch({ type: 'REMOVE', index })}>
              x
         </Button>   
          </li>
				))}
			</ul>
      </FormGroup>

      <FormGroup>

          <Button style={{ backgroundColor: '#ffb9ec', color: '#4B0082', margin: '5%',  marginLeft: '41%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19' }} 
          onClick={() => dispatch({ type: 'SET_VISIBILITY_FILTER' })} >
            
              Clear Completed

         </Button>

      </FormGroup>   
		</Form>
	);
}

export default ShoppingList;
