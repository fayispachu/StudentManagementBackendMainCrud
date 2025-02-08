import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";

function Students() {
  const [userData, setUserData] = useState([]);
  const getStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/student/data"
      );
      setUserData(data.students);
      console.log(data.students);
    } catch (error) {
      console.log(error, "Error in get data get in student");
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/student/delete?id=${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error, "Error in get data in delete student");
    }
  };
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="bg-green-300  justify-center gap-10 p-10  items-center  grid grid-cols-3 ">
        {userData.map((item) => {
          return (
            <div
              key={item._id}
              className="  bg-emerald-800 text-white font-bold text-lg rounded-md  drop-shadow-xl flex p-10 gap-5 flex-col "
            >
              <div className="hidden">
                <Edit id={item._id} />
              </div>
              <h1 className="outline-4 outline-cyan-400 p-2 rounded-md">
                Name:{item.name}
              </h1>
              <h1 className="outline-4 outline-cyan-400 p-2 rounded-md">
                Age:{item.age}
              </h1>
              <h1 className="outline-4 outline-cyan-400 p-2 rounded-md">
                Number:{item.number}
              </h1>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    deleteStudent(item._id);
                    handleReload();
                  }}
                  className="bg-red-600 p-2 rounded-full"
                >
                  DELETE
                </button>
                <Link to={`/edit/${item._id}`}>
                  {" "}
                  <button className="bg-blue-600 p-2 rounded-full">EDIT</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Students;
