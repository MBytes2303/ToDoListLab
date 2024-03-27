import { View, Text } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen() {
  const currentDate = new Date();

  // Extract date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  const day = currentDate.getDate();

  // Format date as string
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  return (
    <MainLayout>
      <Text>AboutScreen</Text>
      <Text>To Do List App</Text>
      <Text>Made By: John Matthew Bayona</Text>
      <Text>Current Date: {formattedDate}</Text>
    </MainLayout>
  );
}
