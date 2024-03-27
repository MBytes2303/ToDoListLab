import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Todoform({ addTask }) {
  const [taskText, setTastText] = useState("");

  const addToList = () => {
    addTask(taskText);
    setTastText("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTastText(text)}
        value={taskText}
      />
      <Button title="Add Item" onPress={addToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    width: 240,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
