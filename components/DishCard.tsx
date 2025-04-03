import { FlatList, Image, StyleSheet, Text, View } from "react-native"

export default function DishCard({
  dish
}: {
  dish: Dish
}) {
  return (
    <View style={styles.dishContainer}>
      <View>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.dishInfos}>Categoria: {dish.category}</Text>
        <Text style={styles.dishInfos}>Calorias: {dish.calories}</Text>
        <View>
          <Text style={styles.dishInfos}>Ingredientes:</Text>
          <FlatList
            data={dish.ingredients}
            keyExtractor={(ingredient, idx) => idx.toString()}
            renderItem={render => {
              const ingredient = render.item.trim()  ;
              return <Text>&bull; {ingredient}</Text>
            }}
          />
        </View>
      </View>

      <Image style={styles.dishImage} source={{ uri: dish.imageUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#EFE4E1",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12
  },

  dishName: {
    fontSize: 24,
    fontWeight: "600"
  },

  dishInfos: {
    fontSize: 20
  },

  dishImage: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    objectFit: "contain"
  }
})