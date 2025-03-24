import { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const TodoWrapper = () => {
  let [input, setInput] = useState("");
  let [allTodos, setAllTodos] = useState([{ id: 1, text: "Javascript" }]);
  let [editTodoId, setEditTodoId] = useState(null);

  let addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      // to display edited todo
      if (editTodoId) {
        let updatedTodos = allTodos.map((todo) => {
          return todo.id === editTodoId ? { ...todo, text: input } : todo;
        });
        setAllTodos(updatedTodos);// setting updated todo to allTodos state
        setEditTodoId(null);// reset state
      } else {
        let newTodo = {
          id: Date.now(),
          text: input,
        };
        console.log(newTodo);

        setAllTodos([...allTodos, newTodo]);
      }

      setInput(""); // clearing input field
    } else {
      alert("Enter some text");
    }
  };

  let deleteTodo = (id) => {
    console.log("deleted", id);
    let filteredTodo = allTodos.filter((todo) => {
      return todo.id !== id;
    });
    setAllTodos(filteredTodo);
  };

  let editTodo = (id) => {
    console.log("edit", id);
    let todoToEdit = allTodos.find((todo) => {
      return todo.id === id;
    });
    setEditTodoId(id); // storing todoToEdit id in state
    setInput(todoToEdit.text); // sending data to input field
  };

  return (
    <div>
      <CreateTodo input={input} setInput={setInput} addTodo={addTodo} />
      <DisplayTodo
        allTodos={allTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoWrapper;
