import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BottomTab } from "./bottomTab";
import Splash from "../screens/splash";
import { AddEntryModal } from "../components/addEntryModal.js";


const stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Splash">
                <stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="AddEntryModal"
                    component={AddEntryModal}
                    options={{ headerShown: false }}
                />

            </stack.Navigator>
        </NavigationContainer>
    )
}