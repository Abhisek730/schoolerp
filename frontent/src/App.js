import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import StudentDetails from "./components/StudentDetails";
import StudentDeepDetails from "./components/screens/StudentDeepDetails";
import SectionItem from "./components/screens/SectionItem";
import FindStudent from "./components/FindStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar></Sidebar>
        <div className="app-body">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addStudent" element={<AddStudent />}></Route>
            <Route path="/studentDetails" element={<StudentDetails />}></Route>
            <Route
              path="/studentDeepDetails/:classid/:sectionid"
              element={<StudentDeepDetails />}
            ></Route>
            <Route
              path="/studentDeepDetails/:classid"
              element={<SectionItem />}
            ></Route>
            <Route path="/findStudent" element={<FindStudent />}></Route>
          </Routes>
          <ToastContainer theme="dark" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
