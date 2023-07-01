import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ backgroundColor: "lightblue", height: 200, width: 200 }} />
      <View
        style={{ backgroundColor: "lightgreen", height: 200, width: 200 }}
      />
    </View>
  );
}
