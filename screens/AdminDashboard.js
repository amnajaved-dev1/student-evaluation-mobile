import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

export default function AdminDashboard() {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          navigation.replace("Login"); // go back to login screen
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
      <WebView
        source={{ uri: "http://192.168.0.101/university_portal/admin_dashboard.php" }}
        style={{ flex: 1, marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });
