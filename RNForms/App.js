import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});
