import React from "react";
import { Text, View } from "react-native";
import styles from "./Battery.styles";

const Battery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.battery}>
        <Text style={styles.text}>100 %</Text>
      </View>
      <View style={styles.batteryHeader} />
    </View>
  );
}

export default Battery;