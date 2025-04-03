import { FlatList, View } from "react-native";
import DishCard from "./DishCard";

export default function DishList({
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