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
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        add notes
      </button>{" "}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content text-dark">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  ref={titleref}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  ref={inputref}
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
