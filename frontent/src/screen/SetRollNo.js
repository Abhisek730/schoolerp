import React, { useState } from "react";
import Classes from "../components/screens/ClassData";
import Sections from "../components/screens/SectionData";
import { toast } from "react-toastify";

export default function SetRollNo() {
  const [students, setStudents] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentSection, setStudentSection] = useState("");
  const [rollNo, setRollNo] = useState(0);

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  // to get student with class and section
  const findStudentWithName = () => {
    fetch("http://localhost:5000/mystuds", {
      headers: {
        "Content-Type": "application/json",
        class: studentClass,
        section: studentSection,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      })
      .catch((err) => console.log(err));
  };

  // set student roll no.
  const setRoll = () => {
    let roll = rollNo;
    students.map((student) => {
      fetch("http://localhost:5000/setroll", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: student._id,
          Roll_No: roll,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      roll++;
      console.log(roll);
    });
    notifyB("Successfully updated");
    setStudents("");
  };

  return (
    <div className="setRoll">
      {/***********Find Students with class and section *******/}
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          background: "#3B71CA",
          maxWidth: "80%",
          margin: "10px auto",
        }}
        className="form"
      >
        <div style={{ maxWidth: "250px" }} className="form-control">
          <label htmlFor="name">Class</label>
          <select
            id="class"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            {Classes.map((option) => {
              return (
                <option key={option.id} value={option.classname}>
                  {option.classname}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ maxWidth: "250px" }} className="form-control">
          <label htmlFor="section">Section</label>
          <select
            id="section"
            value={studentSection}
            onChange={(e) => setStudentSection(e.target.value)}
            required
          >
            <option value="">Select Section</option>
            {Sections.map((option) => {
              return (
                <option key={option.id} value={option.section}>
                  {option.section}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            findStudentWithName();
          }}
        >
          Find
        </button>
      </div>

      {students && (
        <div className="result">
          <div
            style={{
              maxWidth: "350px",
              padding: "10px",
              margin: "10px auto",
              backgroundColor: "rgb(0,30,60)",
              border: "none",
              borderRadius: "5px",
              color: "white",
              boxShadow: "2px 2px 5px black",
            }}
            className="form-contr"
          >
            <label
              style={{
                marginRight: "10px",
                fontWeight: "bolder",
                textTransform: "uppercase",
              }}
              htmlFor="name"
            >
              Roll no. of 1st student
            </label>
            <input
              style={{ outline: "none", padding: "5px" }}
              type="number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
            <button
              style={{ background: "#54B4D3" }}
              className="btn"
              type="submit"
              onClick={() => {
                setRoll();
              }}
            >
              set
            </button>
          </div>

          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Admission No</th>
                <th>Student Name</th>
                <th>Father Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Roll</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i} className="contents">
                  <td>{student.Admission_No}</td>
                  <td>{student.First_Name}</td>
                  <td>{student.Father_Name}</td>
                  <td>{student.Class}</td>
                  <td>{student.Section}</td>
                  <td>{student.Roll_No}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
