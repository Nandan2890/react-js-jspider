import style from "./createtodo.module.css";
const CreateTodo = ({ input, setInput, addTodo }) => {
  return (
    <form id={style.todoform} onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter Todo.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
