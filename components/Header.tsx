import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={{ flex: 3, backgroundColor: "#EFE4E1" }}>
      <Text style={styles.title}>BISTRÔ-DONTE 😋</Text>

      <ImageBackground
        source={{ uri: "https://439623b66ef2e32ac2ca-878d8b04b2333a4ce60ced655a975a22.ssl.cf3.rackcdn.com/Plate_Split.jpg"}}
        style={styles.foodImage}
      >
        <Text style={styles.imageText}>Alimentação Saudável</Text>
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  imageText: {
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#000000c0",
    color: "white",
    padding: 8,
    borderRadius: 8
  }
});