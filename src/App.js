import { useEffect } from "react";
import Header from "./component/header";
import Notes from "./component/notes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "./store/todo";

function App() {
  const dispatch=useDispatch()
 
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
    <div className="App"  style={{background:"#008B8B",height:"100vh"}}>
      <Header />
      <Notes />
    </div>
  );
}

export default App;
