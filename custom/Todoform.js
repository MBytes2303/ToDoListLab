import { View, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function Todoform() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Enter item" />
      <Button title="Add Item" />
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
