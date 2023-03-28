import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/screens/homeScreen'


const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={homeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}