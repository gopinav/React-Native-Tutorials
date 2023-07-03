import { View, Text, Image, ImageBackground, ScrollView } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
          aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
          ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
          nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
          aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
          nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl
          nunc sit amet nisl. Donec condimentum, nisl eu ultricies ultricies,
          nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
          aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
          ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
          nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
          aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
          nisl eu ultricies
        </Text>

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
