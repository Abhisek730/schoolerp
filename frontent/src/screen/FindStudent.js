import React, { useState, useEffect } from "react";
import Table1 from "../components/Table1";
import "../App.css";
import Classes from "../components/screens/ClassData";
import Sections from "../components/screens/SectionData";

export default function FindStudent() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentSection, setStudentSection] = useState("");
  const [adm, setAdm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [tableData, setTableData] = useState("");

  // to filter Table student
  const filterStudent = () => {
    students.forEach((student) => {
      if (student.First_Name == selectedStudent) {
        setTableData(student);
        return;
      }
    });
  };

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
        setSelectedStudent(result[0].First_Name);
      })
      .catch((err) => console.log(err));
  };

  // to find student with admmision no.
  const findStudent = () => {
    fetch(`http://localhost:5000/findStudent/${adm}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setTableData(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (students) {
      filterStudent();
    }
  }, [selectedStudent]);

  return (
    <div className="findStudent">
      <div
        style={{
          backgroundColor: "#2196f3",
          maxWidth: "80%",
          margin: "10px auto",
        }}
      >
        <h1>Find Students</h1>
        {/***********Find Students with Admmision number *******/}
        <div
          style={{ alignItems: "center", justifyContent: "space-between" }}
          className="form"
        >
          <div className="form-control">
            <label htmlFor="name">Admmision number</label>
            <input
              type="number"
              value={adm}
              onChange={(e) => setAdm(e.target.value)}
              required
            />
          </div>

          <button
            className="btn"
            type="submit"
            onClick={() => {
              findStudent();
            }}
          >
            Find
          </button>
        </div>

        <hr style={{ width: "80%", margin: "auto" }} />
        {/***********Find Students with class and section *******/}
        <div
          style={{ alignItems: "center", justifyContent: "space-between" }}
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
      </div>

      {/* ****************  Result *********************** */}

      {students && (
        <div
          style={{
            maxWidth: "350px",
            // border: "1px solid black",
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
            Student Name
          </label>
          <select
            style={{ padding: "5px", outline: "none" }}
            id="name"
            value={selectedStudent}
            onChange={(e) => {
              setSelectedStudent(e.target.value);
            }}
          >
            <option value="">{students[0].First_Name}</option>
            {students.map((option) => {
              return (
                <option key={option.id} value={option.First_Name}>
                  {option.First_Name}
                </option>
              );
            })}
          </select>
        </div>
      )}
      {tableData && <Table1 students={tableData} find={findStudentWithName} />}
    </div>
  );
}
