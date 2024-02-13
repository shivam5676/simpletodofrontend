import axios from "axios";
import AddNote from "./addNote";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "../store/todo";
import DeleteNote from "./deleteNote";

const Notes = () => {
  const todoList = useSelector((state) => state.todo.AllTodo);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid ">
      <div className="container text-center p-2 " style={{ marginTop: "50px" }}>
        <div className="my-3  text-white">
          <AddNote></AddNote>
        </div>
      </div>
      <div
        style={{ display: "flex ", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        {todoList.map((current) => {
          return (
            <div
              key={current.id}
              className="p-2"
              style={{
                background: "	#FDF5E6",
                width: "270px",
                margin: "10px",
                height: "auto",
                borderRadius: "5px",
              }}
            >
              <h4>{current.title}</h4>
              <p className="p-2 text-break fw-semibold">{current.data}</p>
              <div className="d-flex justify-content-between">
                <p>{new Date(current.createdAt).toLocaleString()}</p>
                <DeleteNote id={current.id}></DeleteNote>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Notes;
