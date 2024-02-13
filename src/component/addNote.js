import axios from "axios";
import { useRef } from "react";

const AddNote = () => {
  const titleref = useRef("");
  const inputref = useRef("");
  const saveTodoHandler = async () => {
    console.log(titleref.current.value, inputref.current.value);
    const data = {
      title: titleref.current.value,
      data: inputref.current.value,
    };
    try {
      const response = await axios.post("http://localhost:4000/addtodo", { ...data });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        add notes
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
                Modal title
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
                  Email address
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
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  ref={inputref}
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
