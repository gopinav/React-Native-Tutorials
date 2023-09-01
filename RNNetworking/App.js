import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/pokemon");
      const data = await response.json();
      setPokemonList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      setError("Failed to fetch Pokémon list.");
    }
  };

  const addPokemon = async () => {
    setIsPosting(true);
    try {
      const response = await fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: pokemonName,
          type: pokemonType,
        }),
      });
      const newPokemon = await response.json();
      setPokemonList([...pokemonList, newPokemon]);
      setPokemonName("");
      setPokemonType("");
      setError("");
    } catch (error) {
      console.error("Error adding new Pokémon:", error);
      setError("Failed to add new Pokémon.");
    }
    setIsPosting(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Pokemon Name"
              value={pokemonName}
              onChangeText={setPokemonName}
            />
            <TextInput
              style={styles.input}
              placeholder="Pokemon Type"
              value={pokemonType}
              onChangeText={setPokemonType}
            />
            <Button
              title={isPosting ? "Adding..." : "Add Pokemon"}
              onPress={addPokemon}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={pokemonList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.typeText}>{item.type}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 16,
                  }}
                />
              )}
              ListEmptyComponent={<Text>No Items Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Pokemon List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refreshing} // Pass the refreshing state
              onRefresh={handleRefresh} // Pass the onRefresh function
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center", // Center the loading spinner
    alignItems: "center", // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
});

export default App;
