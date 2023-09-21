const fetch = require("node-fetch");

const delayAction = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I m Delay for you");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }
  return next(action);
};

const fetchTodoMiddliwear = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodd") {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    store.dispatch({
      type: "todos/todoLoaded",
      payload: todos,
    });

    console.log(`Number of Update : ${store.getState().todos.length}`);

    return;
  }

  return next(action);
};

module.exports = {
  delayAction,
  fetchTodoMiddliwear,
};
