const DisplayTodo = ({ allTodos, deleteTodo, editTodo }) => {
  console.log(allTodos); //[{},{},{},....]
  return (
    <div>
      {allTodos.map((todo) => {
        return (
          <section key={todo.id}>
            <h4>{todo.text}</h4>
            <button onClick={() => editTodo(todo.id)}>edit</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </section>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
