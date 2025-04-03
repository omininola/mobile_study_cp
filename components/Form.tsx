import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "./Button";

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

  const [dish, setDish] = useState<Dish>(defaultDish);

  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.formTitle}>Dados do prato</Text>

      <View style={{ gap: 8 }}>
        <Input 
          labelText="Nome do prato"
          onChangeText={name => setDish(prev => ({...prev, name}))}
        />

        <Input
          labelText="Tipo"
          onChangeText={category => setDish(prev => ({...prev, category}))}
        />

        <View style={{ flexDirection: "row", gap: 12 }}>
          <Input
            labelText="Calorias"
            onChangeText={calories => setDish(prev => ({...prev, calories}))}
          />

          <Input
            labelText="Link da imagem"
            onChangeText={imageUrl => setDish(prev => ({...prev, imageUrl}))}
          />
        </View>

        <Input
          labelText="Ingredientes"
          onChangeText={ingredientsString => {
            const ingredients = ingredientsString.split(',');
            if (ingredients[ingredients.length - 1] === "") ingredients.pop();
            setDish(prev => ({...prev, ingredients}));
          }}
        />
      </View>

      <Button
        onPress={() => setDishes(prev => [...prev, dish])}
      >
        Salvar Prato
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center"
  }
})