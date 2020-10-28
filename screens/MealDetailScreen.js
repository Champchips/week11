import React, {useCallback, useEffect}from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../store/actions/mealsAction";
import { useSelector } from 'react-redux';
const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const  currentMealIsFav = useSelector((state) => state.meals.favoriteMeals.some((meal) => meal.id === mealId))
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  },[dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({togleFav : toggleFavoriteHandler})
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({isFav : currentMealIsFav})
  }, [currentMealIsFav])
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={{ uri: selectedMeal.imageUrl }} style={{ width: '100%', height: 400 }} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ textAlign: 'center', marginRight: 20 }}>{selectedMeal.duration} m</Text>
          <Text style={{ textAlign: 'center', marginRight: 20 }}>{selectedMeal.complexity}</Text>
          <Text style={{ textAlign: 'center', marginRight: 20 }}>{selectedMeal.affordability}</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Ingredients</Text>
        </View>
        {/* <Text>{selectedMeal.title}</Text>
        <Text>{selectedMeal.steps}</Text> */}
        <View style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
          {selectedMeal.ingredients.map((it, index) => (<Text>{it}</Text>))}
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Step</Text>
          <View style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>
            {selectedMeal.steps.map((it, index) => (<Text>{it}</Text>))}
          </View>
        </View>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const MealId = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam('togleFav')
  const isFav = navigationData.navigation.getParam('isFav')
  return {
    headerTitle: MealId,
    headerRight: () => {
      if(isFav){
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Fav"
              iconName="ios-star"
              onPress={toggleFavorite}
            />
          </HeaderButtons>
        );
      }else{
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Fav"
              iconName="ios-star-outline"
              onPress={toggleFavorite}
            />
          </HeaderButtons>
        );
      }
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "purple",
    marginBottom: 50,
    fontSize: 20,
  },
  steps: {
    color: "black",
    marginBottom: 50,
    fontSize: 15,
  },
});

export default MealDetailScreen;
