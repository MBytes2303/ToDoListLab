import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Todolist({ tasks }) {
  return (
    <ScrollView style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Pressable key={index} style={styles.item}>
          <Text style={styles.text}>{task}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
  },
  item: {
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 3,
    marginHorizontal: 3,
    height: 32,
    padding: 5,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
