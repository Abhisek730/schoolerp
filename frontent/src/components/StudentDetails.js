import React from "react";
import ClassItems from "./screens/ClassItem";
import Classes from "./screens/ClassData";
import "./StudentDetails.css";

export default function StudentDetails() {
  return (
    <div className="studentDetails">
      <h1>Choose Class</h1>
      <div className="classes">
        {Classes.map((classinfo) => (
          <ClassItems
            key={classinfo._id}
            target={`/studentDeepDetails/${classinfo.classname}`}
            //  target=
            classid={classinfo.classname}
          />
        ))}
      </div>
    </div>
  );
}
