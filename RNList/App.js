import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import PokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        {PokemonList.map((pokemon) => (
          <View style={styles.card} key={pokemon.id}>
            <Text>
              {pokemon.type}: {pokemon.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 32,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
  },
});
