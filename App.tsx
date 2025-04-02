import { useState } from "react";
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Dish = {
  name: string;
  category: string;
  calories: string;
  imageUrl: string;
  ingredients: string[]; 
}

export default function Index() {
  const [dishes, setDishes] = useState<Dish[]>([])

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 7 }}>
        <Form setDishes={setDishes}/>

        <DishList dishes={dishes}/>
      </View>
    </View>
  );
}

export function Header() {
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

export function DishList({
  dishes
}: {
  dishes: Dish[]
}) {
  return (
    <View>
      <FlatList 
        data={dishes}
        keyExtractor={dish => dish.name}
        renderItem={render => {
          const dish = render.item
          return <DishCard dish={dish}/>
        }}
      />
    </View>
  );
}

export function DishCard({
  dish
}: {
  dish: Dish
}) {
  return (
    <View>
      <Text>{dish.name}</Text>
    </View>
  )
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
})