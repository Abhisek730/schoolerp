import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TableCom from "./TableCom";

export default function StudentDeepDetails() {
  const [data, setData] = useState([]);
  console.log(useParams());
  const { classid, sectionid } = useParams();

  useEffect(() => {
    // fetching all students
    if (classid == "all") {
      fetch("/dash", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((err) => console.log(err));
    } else {
      fetch("/mystuds", {
        headers: {
          "Content-Type": "application/json",
          class: classid,
          section: sectionid,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="deepDetails">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search student with name?"
          />
          <button type="submit" className="searchButton">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      <table cellSpacing="0">
        <thead>
          <tr>
            <th>SN</th>
            <th>Student Name</th>
            <th>Admission No</th>
            <th>DOB</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Address</th>
            <th>Father Mobile</th>
            <th>Admission Date</th>
            <th>Class</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, i) => (
            <tr key={i} className="contents">
              <td>{i + 1}</td>
              <td>{student.First_Name}</td>
              <td>{student.Admission_No}</td>
              <td>{student.DOB}</td>
              <td>{student.Father_Name}</td>
              <td>{student.Mother_Name}</td>
              <td>{student.Address}</td>
              <td>{student.Father_Mobile}</td>
              <td>{student.Admission_Date}</td>
              <td>{student.Class}</td>
              <td>{student.Section}</td>
              <td>{student.Roll_No}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
