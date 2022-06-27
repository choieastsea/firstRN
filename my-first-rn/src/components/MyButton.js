import React, { useState, useCallback } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const MyButton = () => {
  const [pressCnt, setPressCnt] = useState(0);
  const countPlus = useCallback(() => {
    setPressCnt((pressCnt) => pressCnt + 1);
  }, []);
  return (
    <Pressable
      onPress={countPlus}
      onLongPress={countPlus}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#3498db" : "white",
        },
        styles.normalbtn,
      ]}
    >
      {(
        { pressed } //event 객체를 인자로 하는 익명 함수 이용 가능
      ) => (
        <Text style={{ fontSize: 24, color: "black" }}>
          {pressed ? "Pressed! : " : "Press Me! : "}
          {pressCnt}
        </Text>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  normalbtn: {
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  pressIn: {
    backgroundColor: "grey",
  },
  text: {
    fontSize: 30,
  },
});
export default MyButton;
