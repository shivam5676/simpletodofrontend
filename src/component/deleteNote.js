import axios from "axios";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../store/todo";
const DeleteNote = (props) => {
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-trash-fill"
      viewBox="0 0 16 16"
      onClick={() => deleteTodoHandler(props.id)}
    >
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
    </svg>
  );
};
export default DeleteNote;
