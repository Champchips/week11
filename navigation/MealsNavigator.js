// import คอมโพเนนต์ที่จำเป็น
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreens from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";
const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);
const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreens,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);
const FiltersNavigator = createStackNavigator({
  Filers: {
    screen: FiltersScreen,
  },
});
const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-restaurant" size={24} />;
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-star" size={24} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: { fontSize: 18, fontWeight: "bold" },
      style: { backgroundColor: "#4a148c" },
    },
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filers: {
      screen: FiltersNavigator,
    },
  },
  {
    contentOptions: {
      activeTintColor: "#3867d6",
    },
  }
);
export default createAppContainer(MainNavigator);
