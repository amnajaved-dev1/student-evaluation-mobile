import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

export type MenuItem = { title: string; path: string; };

type Props = { menuItems: readonly MenuItem[]; };

export default function Sidebar({ menuItems }: Props) {
  return (
    <ScrollView style={styles.sidebar}>
      {menuItems.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.item}
          onPress={() => router.push(item.path as any)}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 220,
    backgroundColor: "#1e1e1e",
    paddingTop: 20,
    paddingHorizontal: 15,
    height: "100%",
  },
  item: { marginBottom: 15 },
  itemText: { color: "#fff", fontSize: 16 },
});
