import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../store/todo";

const AddNote = () => {
  const titleref = useRef("");
  const inputref = useRef("");
  const dispatch=useDispatch()
  const saveTodoHandler = async () => {
    console.log(titleref.current.value, inputref.current.value);
    const title=titleref.current.value
    const inputdata=inputref.current.value
    if(title.length==0||inputdata.length==0){
      alert("not saved.....title and data field can not be empty")
      return;
    }
    const data = {
      title: title,
      data:inputdata ,
    };
    try {
      const response = await axios.post("http://localhost:4000/addtodo", { ...data });
    
      dispatch(todoSliceActions.addTodo(response.data))
      alert("data saved successfully")
    } catch (err) {
      console.log(err);
      alert("something went wrong")
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn text-dark text-start p-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{background:"	#FDF5E6",width:"250px"}}
      >
        take a note...
      </button>{" "}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content text-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Todos
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                   Title
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  ref={titleref}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1 fw-5" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  ref={inputref}
                  required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveTodoHandler}
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNote;
