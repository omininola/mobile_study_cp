import { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import { Form } from "./components/Form";
import DishList from "./components/DishList";

export default function Index() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  return (
    <View style={{ flex: 1, gap: 12 }}>
      <Header />

      <ScrollView style={{ flex: 7, padding: 12, gap: 12 }}>
        <Form setDishes={setDishes} />

        <DishList dishes={dishes} />
      </ScrollView>
    </View>
  );
}