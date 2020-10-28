import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
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
  const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // console.log("selectedMeal: ", selectedMeal);
  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Fav"
            iconName="ios-star"
          />
        </HeaderButtons>
      );
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
