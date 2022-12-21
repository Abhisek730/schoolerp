import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  const [studentCount, setStudentCount] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {

        setStudentCount(result.length)
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="cards">
        <DashboardCard
          takeme="/studentDeepDetails/all/all"
          count={studentCount}
          heading="Students"
          subHeading="Total Students"
        ></DashboardCard>
        <DashboardCard
          heading="Teachers"
          subHeading="Total Teachers"
        ></DashboardCard>
        <DashboardCard heading="Books" subHeading="Total Books"></DashboardCard>
        <DashboardCard heading="Fees" subHeading="Total Fees"></DashboardCard>
        <DashboardCard
          heading="Attendance"
          subHeading="Total Attendance"
        ></DashboardCard>
        <DashboardCard
          heading="Subjects"
          subHeading="Total Subjects"
        ></DashboardCard>
      </div>
    </div>
  );
}
