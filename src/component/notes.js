import AddNote from "./addNote";

const Notes = () => {
  return (
    <div className="container-fluid bg-warning">
      <div className="container text-center p-2">
        <div className="mt-2 bg-dark text-white"><AddNote></AddNote></div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        <div
          style={{
            background: "grey",
            width: "300px",
            margin: "10px",
            height: "auto",
          }}
        >
          <h4>title</h4>
          <p className="p-2 text-break">
            hello i am shivam singh rajawat
            sultanpurasdgdghgdhghdfhafhgdhgdghsdg wala
          </p>
          <button onClick={deleteTodoHandler}>delete</button>
        </div>
      </div>
    </div>
  );
};
export default Notes;
