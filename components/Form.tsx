import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function Form({
  setDishes
}: {
  setDishes: React.Dispatch<React.SetStateAction<Dish[]>>
}) {
  const defaultDish: Dish = {
    name: "",
    category: "",
    calories: "",
    imageUrl: "",
    ingredients: []
  }

  const [dish, setDish] = useState<Dish>()

  return (
    <View>
      <Text>Dados do prato</Text>

      <View>
        <TextInput />
        <TextInput />

        <View>
          <TextInput />
          <TextInput />
        </View>

        <TextInput />
      </View>

      <Pressable>
        <Text>Salvar Prato</Text>
      </Pressable>
    </View>
  );
}