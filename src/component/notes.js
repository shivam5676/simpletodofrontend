import axios from "axios";
import AddNote from "./addNote";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "../store/todo";

const Notes = () => {
  const todoList = useSelector((state) => state.todo.AllTodo);
  const dispatch = useDispatch();
  const deleteTodoHandler = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/deletetodo?delId=${id}`
      );

      dispatch(todoSliceActions.deleteTodo(id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid ">
      <div className="container text-center p-2">
        <div className="mt-2  text-white">
          <AddNote></AddNote>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        {todoList.map((current) => {
          return (
            <div
              key={current.id}
              className="p-2"
              style={{
                background: "	#FDF5E6",
                width: "300px",
                margin: "10px",
                height: "auto",
                borderRadius: "5px",
              }}
            >
              <h4>{current.title}</h4>
              <p className="p-2 text-break fw-semibold">{current.data}</p>
              <div className="d-flex justify-content-between">
                <p>{new Date(current.createdAt).toLocaleString()}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                  onClick={() => deleteTodoHandler(current.id)}
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Notes;
