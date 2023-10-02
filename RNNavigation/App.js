import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#e8e4f3" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Guest",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
