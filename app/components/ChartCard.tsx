import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

type ChartCardProps = {
  title: string;
  chartData: any;
};

export default function ChartCard({ title, chartData }: ChartCardProps) {
  const screenWidth = Dimensions.get("window").width - 40;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <BarChart
        data={chartData}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#1e1e1e",
          decimalPlaces: 0,
          color: () => "#ffffff",
          labelColor: () => "#ffffff",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
});
