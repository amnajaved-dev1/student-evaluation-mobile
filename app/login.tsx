// app/login.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";
import { authStore } from "./store/authStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.0.101/university_portal/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}&password=${password}`,
      });

      const data = await response.json();

      if (!data.success) {
        Alert.alert("Error", data.message || "Invalid credentials");
        return;
      }

      authStore.login(data.role, data.name);

      // --- FIX HERE: Cast path as 'any' to bypass RelativePathString errors ---
     if (data.role === "admin") router.replace("/admin" as any);
if (data.role === "student") router.replace("/student" as any);
if (data.role === "teacher") router.replace("/teacher" as any);

    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Something went wrong!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
 
 