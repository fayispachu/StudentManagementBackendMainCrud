import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-emerald-800 text-white font-bold text-2xl w-[100%]  flex flex-row justify-evenly py-4">
        <Link to="/">
          {" "}
          <h1>Home</h1>
        </Link>

        <Link to="/students">
          {" "}
          <h1>Students</h1>
        </Link>

        <Link to="edit">
          {" "}
          <h1>Edit</h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
