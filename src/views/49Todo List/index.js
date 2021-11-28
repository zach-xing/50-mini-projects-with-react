import React, {useState} from "react";
import { Main, Todos } from "./styled";

function TodoList() {

  const [todos, setTodos] = useState([])

  const handleKeyDown = (e) => {
    if(e.key.toLowerCase() === 'enter') {
      let arr = [...todos];
      arr.push({
        text: e.target.value,
        completed: false
      });
      setTodos(arr);
    }
  }

  const handleCompleted = (index) => {
    let arr = [...todos];
    arr[index].completed = !arr[index].completed;
    setTodos(arr);
  }

  return (
    <Main>
      <h1>todos</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        autoComplete="off"
        onKeyDown={handleKeyDown}
      />
      <Todos>
        {
          todos.length > 0 && todos.map((item, index) => {
            return (
              <li key={item.text} className={item.completed ? "completed" : ""} onClick={() => handleCompleted(index)}>
                {item.text}
              </li>
            );
          })
        }
      </Todos>
    </Main>
  );
}

export default TodoList;
