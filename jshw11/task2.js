//Завдання 2

function requestTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(todo => {
      return todo;
    })
    .catch(error => {
      console.log("Error getting todo: ", error);
      throw error;
    });
}

function requestUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      return user;
    })
    .catch((error) => {
      console.log("Error getting user: ", error);
      throw error;
    });
}

Promise.all([requestTodo(), requestUser()])
  .then(([todo, user]) => {
    console.log("Todo: ", todo);
    console.log("User: ", user);
    return (todo, user);
  });

Promise.race([requestTodo(), requestUser()])
  .then((arrayResult) => {
    console.log("Faster promise: ", arrayResult);
    return arrayResult;
  });