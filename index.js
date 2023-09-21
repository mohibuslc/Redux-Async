const { createStore , applyMiddleware} = require('redux');
const {delayAction , fetchTodoMiddliwear } = require('./delayAction')


const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => { // Fixed the typo 'asction' to 'action'
  switch (action.type) { // Fixed the typo 'asction.payload' to 'action.type'
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload, // Fixed the typo 'asction.payload' to 'action.payload'
          },
        ],
      };

    case "todos/todoLoaded": // Fixed the typo 'todos/todoLoded' to 'todos/todoLoaded'
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state; // You should return the current state in the default case
  }
};

const store = createStore(todoReducer ,applyMiddleware(delayAction , 
fetchTodoMiddliwear) );

// subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux.js from LWS",
// });

// dispatch action
store.dispatch({
  type: "todos/fetchTodd",
 
});
