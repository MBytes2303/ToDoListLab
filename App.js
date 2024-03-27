import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Todoform from "./custom/Todoform";
import Todolist from "./custom/Todolist";

export default function App() {
  const [tasks, setTasks] = useState(["Do Laundry", "Go to gym", "Walk Dog"]);

  return (
    <SafeAreaView style={styles.container}>
      <Todolist tasks={tasks} />
      <Todoform />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
});

// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Pressable,
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   Button,
// } from "react-native";

// function App() {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Do laundry</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task]}>
//             <Text style={styles.taskText}>Go to gym</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Walk dog</Text>
//           </View>
//         </Pressable>
//       </ScrollView>
//       <View style={styles.form}>
//         <TextInput style={styles.input} placeholder="Add a new task..." />
//         <Button title="Add" />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   task: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//   },
//   completed: {
//     backgroundColor: "#e0e0e0",
//   },
//   taskText: {
//     fontSize: 16,
//   },
//   form: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 10,
//   },
// });

// export default App;
