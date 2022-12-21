import React, { useState } from "react";
import "../Css/Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdFindInPage } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai"

export default function Sidebar() {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <RiDashboardFill />,
    },
    {
      path: "/addStudent",
      name: "Add Student",
      icon: <IoPersonAdd />,
    },
    {
      path: "/studentDetails",
      name: "Student Details",
      icon: <BsFillPersonLinesFill />,
    },
    {
      path: "/findStudent",
      name: "Find Student",
      icon: <MdFindInPage />
    },
    {
      path: "/setrollno",
      name: "Set Roll No.",
      icon: <AiFillEdit />
    }
  ];
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
      <div className="top-section">
        <p style={{ display: isOpen ? " " : "none" }}>Sidebar</p>
        <FaBars
          className="bars"
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggle();
          }}
        />
      </div>
      <div className="sidebar-menu">
        {menuItem.map((item) => {
          return (
            <Link to={item.path}>
              <div className="option">
                {" "}
                <span className="icons">{item.icon}</span>{" "}
                <span style={{ display: isOpen ? " " : "none", whiteSpace: "nowrap" }}>
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
        {/* <Link to="/">
          <div className="option">
            {" "}
            <span className="icons">
              <RiDashboardFill />
            </span>{" "}
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/addStudent">
          <div className="option">
            {" "}
            <span className="icons">
              <IoPersonAdd />
            </span>{" "}
            Add Student
          </div>
        </Link>
        <Link to="/studentDetails">
          <div className="option">
            <div>
              {" "}
              <span className="icons">
                <BsFillPersonLinesFill />
              </span>{" "}
              Student Details
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
