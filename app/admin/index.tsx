import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Sidebar from "../components/Sidebar";
import StatsBox from "../components/StatsBox";
import ChartCard from "../components/ChartCard";

export default function AdminDashboard() {
  const menuItems = [
    { title: "Dashboard", path: "/admin" },
    { title: "Analytics", path: "/admin/admin_analytics" },
    { title: "Manage Users", path: "/admin/manage_users" },
    { title: "Manage Courses", path: "/admin/manage_courses" },
    { title: "Manage Enrollments", path: "/admin/manage_enrollments" },
    { title: "Manage Attendance", path: "/admin/manage_attendance" },
    { title: "Manage Fees", path: "/admin/manage_fees" },
  ];

  // Dummy data (replace with API)
  const [stats] = useState({
    totalStudents: 50,
    totalTeachers: 10,
    totalCourses: 8,
    totalEnroll: 120,
    feesPaid: 80,
    feesUnpaid: 40,
  });

  const attendanceChart = {
    labels: ["Math", "Physics", "Chemistry"],
    datasets: [{ label: "Attendance %", data: [80, 70, 90], backgroundColor: ["green","red","green"] }]
  };

  const gpaChart = {
    labels: ["Sem 1", "Sem 2"],
    datasets: [{ label: "Avg GPA", data: [3.2, 3.5], backgroundColor: "blue" }]
  };

  const feesChart = {
    labels: ["Sem 1", "Sem 2"],
    datasets: [
      { label: "Paid", data: [20, 30], backgroundColor: "green" },
      { label: "Unpaid", data: [10, 5], backgroundColor: "red" }
    ]
  };

  const evalChart = {
    labels: ["Math", "Physics"],
    datasets: [{ label: "Avg Rating", data: [4.5, 4.2], backgroundColor: "purple" }]
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Sidebar menuItems={menuItems} />
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={styles.heading}>Admin Dashboard</Text>
        <View style={styles.statsContainer}>
          <StatsBox title="Total Students" value={stats.totalStudents} />
          <StatsBox title="Total Teachers" value={stats.totalTeachers} />
          <StatsBox title="Total Courses" value={stats.totalCourses} />
          <StatsBox title="Total Enrollments" value={stats.totalEnroll} />
          <StatsBox title="Fees Paid" value={stats.feesPaid} />
          <StatsBox title="Fees Unpaid" value={stats.feesUnpaid} />
        </View>

        <ChartCard title="📊 Attendance % by Course" chartData={attendanceChart} />
        <ChartCard title="📈 Avg GPA by Semester" chartData={gpaChart} />
        <ChartCard title="💰 Fees Paid vs Unpaid" chartData={feesChart} />
        <ChartCard title="⭐ Evaluation Ratings" chartData={evalChart} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  statsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
});
