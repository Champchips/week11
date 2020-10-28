import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";


const FavoritesScreen = (props) => {
  const availiableMeals = useSelector(state => state.meals.favoriteMeals)
  const favMeals = availiableMeals.filter((meal) => meal.id);

  return (
    <View style={styles.screen}>
      <MealList listData={favMeals} navigation={props.navigation} />
    </View>

  );
};
FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
