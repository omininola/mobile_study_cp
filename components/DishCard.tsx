import { Text, View } from "react-native"

export default function DishCard({
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