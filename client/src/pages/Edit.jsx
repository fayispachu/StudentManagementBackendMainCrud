import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [number, setNumber] = useState("");

  const getStudent = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/student/edit?id=${id}`
      );
      setName(data.doc.name);
      setAge(data.doc.age);

      setNumber(data.doc.number);

      console.log(data.doc);
    } catch (error) {
      console.log(error, "error in  get id ");
    }
  };
  useEffect(() => {
    getStudent();
  }, [id]);

  const handleUpdatedTask = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/student/edit?id=${id}`,
        { name, age, number }
      );
      console.log(data);
    } catch (error) {
      console.log("Error:in put id", error);
    }
  };
  return (
    <>
      <div className="bg-green-300 w-[100%] h-[100vh] flex justify-center items-center flex-col">
        {" "}
        <h1>Edit</h1>
        <form
          onSubmit={handleUpdatedTask}
          className=" px-10  bg-emerald-800 text-white font-bold text-lg rounded-md  drop-shadow-xl flex p-10 gap-5 flex-col "
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="p-3  px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className="p-3  px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            placeholder="Age"
          />
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            className="p-3   px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            placeholder="Number"
          />
          <button
            type="submit"
            className="bg-cyan-500 outline-3 outline-cyan-500 px-4 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit;
