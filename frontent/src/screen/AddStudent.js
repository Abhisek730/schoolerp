import React, { useState } from "react";
import "../Css/AddStudent.css";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [classname, setClassname] = useState("");
  const [section, setSection] = useState("");
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [adm, setAdm] = useState("");

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const navigate = useNavigate();

  const postData = () => {
    // Sending data to server
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_name: name,
        classname: classname,
        addmission_no: adm,
        parents_name: fname,
        age: age,
        section: section,
      }),
    })
      .then((res) => res.json())
      .then((data) => {

        notifyB("Registered Succesfully");
        navigate("/");
      });
  };
  return (
    <div className="addStudents" style={{ flexGrow: "1" }}>
      <div className="addStudentForm">
        <h1 style={{ color: "white" }}>Register Student</h1>
        <div className="form">
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="name">Class</label>
            <select
              id="class"
              value={classname}
              onChange={(e) => setClassname(e.target.value)}
              required
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
              <option value="Eight">Eight</option>
              <option value="Nine">Nine</option>
              <option value="Ten">Ten</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="name">Section</label>
            <select
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="name">Parent's Name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          {/* <div className='form-control'>
              <label htmlFor='name'>Joining Date</label>
              <input type='date' />
            </div>{' '} */}
          <div className="form-control">
            <label htmlFor="name">Admmision number</label>
            <input
              type="number"
              value={adm}
              onChange={(e) => setAdm(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>
        <input
          className="btn-register"
          type="submit"
          value="Register"
          onClick={() => {
            postData();
          }}
        ></input>
      </div>
      <div className="import-data">
        <h2>Add Students With CSV File</h2>
        <form
          action="http://localhost:5000/uploadFile"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="dataSheet" />
          <button type="submit">Upload Students</button>
        </form>
      </div>
    </div>
  );
}
