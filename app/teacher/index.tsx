import React from "react";
import { View, Text } from "react-native";
import Sidebar, { MenuItem } from "../components/Sidebar";

const teacherMenuItems: MenuItem[] = [
  { title: "Dashboard", path: "/teacher" },
  { title: "Analytics", path: "/teacher/analytics" },
  { title: "Enter Marks", path: "/teacher/enter_marks" },
];

export default function TeacherDashboard() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Sidebar menuItems={teacherMenuItems} />
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Welcome to Teacher Dashboard</Text>
      </View>
    </View>
  );
}
