import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={{ flex: 3, backgroundColor: "#EFE4E1" }}>
      <Text style={styles.title}>BISTRÔ-DONTE 😋</Text>

      <ImageBackground
        source={{ uri: "https://439623b66ef2e32ac2ca-878d8b04b2333a4ce60ced655a975a22.ssl.cf3.rackcdn.com/Plate_Split.jpg"}}
        imageStyle={styles.foodImage}
      >
        <Text>Alimentação saúdavel</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
    padding: 12
  },

  foodImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    resizeMode: "cover"
  }
});