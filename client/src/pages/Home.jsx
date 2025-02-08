import axios from "axios";
import { useState } from "react";
function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [number, setNumber] = useState("");

  const studentData = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/student/create",
        {
          name,
          age,
          number,
        }
      );

      console.log(data);
    } catch (error) {
      console.log(error, "error in create api lee");
    }
  };

  return (
    <>
      <div className="bg-green-300 w-[100%] h-[100vh] flex justify-center items-center flex-col">
        {" "}
        <h1>Home</h1>
        <form className=" px-10  bg-emerald-800 text-white font-bold text-lg rounded-md  drop-shadow-xl flex p-10 gap-5 flex-col ">
          <input
            className="p-3  px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="p-3  px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <input
            className="p-3   px-16 outline-3 rounded-full outline-cyan-500"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
          />
          <button
            onClick={studentData}
            className="bg-cyan-500 outline-3 outline-cyan-500 px-4 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
