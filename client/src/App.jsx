import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Students from "./pages/Students";
import Edit from "./pages/Edit";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
