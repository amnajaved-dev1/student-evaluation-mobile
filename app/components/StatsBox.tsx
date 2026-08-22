import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { title: string; value: number | string; };

export default function StatsBox({ title, value }: Props) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9"
  },
  title: { fontSize: 14, color: "#555" },
  value: { fontSize: 18, fontWeight: "bold", marginTop: 5 }
});
