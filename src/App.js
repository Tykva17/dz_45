import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
import {addTodo, removeTodo} from "./Actions/Action";

function App() {

  const [counter, setCounter] = useState(0);
  const [todo,setTodo] = useState("");
  const todos = useSelector( state => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if(todo !== ""){
      dispatch(addTodo(counter, todo));
      setCounter(counter + 1);
      setTodo("");
    }
  }


  return (
    <div className="App">
          <h1>ToDos</h1>
          <div className="todo">
            <input
                type="text"
                value={todo}
                onChange={ e => setTodo(e.target.value)}
            />
          </div>
      <button className='add_btn' onClick={todoSubmitHandler}>Add to do</button>

      <div className="todos">
        <ul>
          {
            todos?.map( todo => (
                <li className='todo_item' key={todo.id}>
                  <p>{todo.task}</p>
                  <button onClick={ () => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
