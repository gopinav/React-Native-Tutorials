import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Click me"
          onPress={() => console.log("Button pressed")}
          color="midnightblue"
        />
        <Pressable
          onPress={() => {
            console.log("Image pressed");
          }}
        >
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("Text pressed");
          }}
        >
          <Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
            eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
            ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
            sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
            nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
            condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
            eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
            ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
            sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
            nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
            condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
            eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
            ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
            sit amet nisl. Donec condimentum, nisl eu ultricies
          </Text>
        </Pressable>

        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200 }}
      /> */}
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> World!
        </Text>
      </ImageBackground> */}
      </ScrollView>
    </View>
  );
}
