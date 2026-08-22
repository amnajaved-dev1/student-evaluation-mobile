import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    fetch("http://192.168.0.101/university_portal/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert("Success", data.message);

          // Navigate based on role
          if (data.role === "admin") navigation.replace("AdminDashboard");
          else if (data.role === "teacher") navigation.replace("TeacherDashboard");
          else if (data.role === "student") navigation.replace("StudentDashboard");
          else Alert.alert("Error", "Unknown role");
        } else {
          Alert.alert("Error", data.message);
        }
      })
      .catch(error => Alert.alert("Error", "Something went wrong"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }
});
