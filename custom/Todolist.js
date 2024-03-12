import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Todolist() {
  return (
    <ScrollView style={styles.listContainer}>
      <Pressable style={styles.item}>
        <Text styles={styles.text}>Do laundry</Text>
      </Pressable>
      <Pressable style={styles.item}>
        <View>
          <Text styles={styles.text}>Walk the dog</Text>
        </View>
      </Pressable>
      <Pressable style={styles.item}>
        <View>
          <Text styles={styles.text}>Do the dishes</Text>
        </View>
      </Pressable>
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginTop: 3,
    marginHorizontal: 3,
    height: 32,
    padding: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: "Arial",
    textAlign: "center",
  },
});
