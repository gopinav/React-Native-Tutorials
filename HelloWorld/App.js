import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Click me"
          // onPress={() => StatusBar.setHidden(true)}
          onPress={() => setIsModalVisible(true)}
          // onPress={() => console.log("Button pressed")}
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
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            onPress={() => setIsModalVisible(false)}
            color="midnightblue"
          />
        </View>
      </Modal>
    </View>
  );
}
