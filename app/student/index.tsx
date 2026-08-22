import React from "react";
import { View, Text } from "react-native";
import Sidebar, { MenuItem } from "../components/Sidebar";

const studentMenuItems: MenuItem[] = [
  { title: "Dashboard", path: "/student" },
  { title: "View Marks", path: "/student/view_marks" },
  { title: "Attendance", path: "/student/attendance" },
];

export default function StudentDashboard() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Sidebar menuItems={studentMenuItems} />
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Welcome to Student Dashboard</Text>
      </View>
    </View>
  );
}
