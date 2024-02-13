import { useEffect } from "react";
import Header from "./component/header";
import Notes from "./component/notes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "./store/todo";

function App() {
  const dispatch=useDispatch()
  const currentstate=useSelector((state)=>state.todo.AllTodo)
  console.log(currentstate)
  useEffect(() => {
    async function todoFetcher() {
      try {
        const response = await axios.get("http://localhost:4000/alltodo");
        console.log(response)
        response.data.map((current)=>{
          dispatch(todoSliceActions.addTodo(current))
        })
      } catch (err) {
        console.log(err);
      }
    }
    todoFetcher();
  }, []);
  return (
    <div className="App">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
