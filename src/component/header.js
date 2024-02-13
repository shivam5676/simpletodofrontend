const Header = () => {
  return (
    <div className="container-fluid bg-black d-flex fixed-top" style={{ height: "50px" }}>
    <div className="p-2">  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-nested text-white" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
</svg>
   </div>   <h2 className="text-white">Notes</h2>
    </div>
  );
};
export default Header;
