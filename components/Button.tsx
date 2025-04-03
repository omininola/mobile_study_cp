import { PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export default function Button({
  children,
  ...props
}: PropsWithChildren & PressableProps
) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#EFE4E1",
    borderRadius: 8,
    paddingVertical: 12
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    userSelect: "none"
  }
})