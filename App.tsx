import { useState } from "react";
import { View } from "react-native";
import Header from "./components/Header";
import { Form } from "./components/Form";
import DishList from "./components/DishList";

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