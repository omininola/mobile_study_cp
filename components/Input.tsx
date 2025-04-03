import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

export default function Input({
  labelText,
  ...props
}: {
  labelText: string;
} & TextInputProps
) {
  return (
    <View style={{ flex: 1, gap: 4 }}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20
  },

  input: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#EFE4E1",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12
  }
})