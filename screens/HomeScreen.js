import { SafeAreaView, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Todoform from "../components/Todoform";
import Todolist from "../components/Todolist";
import MainLayout from "../layouts/MainLayout";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do Laundry", "Go to gym", "Walk Dog"]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <Todolist tasks={tasks} />
      <Todoform addTask={addTask} />
      <Button
        title="Go To About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
}
