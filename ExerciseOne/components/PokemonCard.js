import { View, Text, StyleSheet, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>HP: {hp}</Text>
      </View>

      <Image source={image} accessibilityLabel={`${name} Pokemon`} />

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>

      <View>
        <Text>Weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
