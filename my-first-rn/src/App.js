import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyButton from  "./components/MyButton";
export default function App() {
  const name = "eastsea";
  console.log("Expo DevTools Log Test");
  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <MyButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
