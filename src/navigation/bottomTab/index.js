import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../../screens/bottomTab/home";
import Detail from "../../screens/bottomTab/detail";
import Chart from "../../screens/bottomTab/chart";
import { icons } from "../../assets/icons";
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();
export function BottomTab() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconI;
                    if (route.name === 'Home') {
                        iconI = icons.home
                    }
                    if (route.name === 'Detail') {
                        iconI = icons.file
                    }
                    if (route.name === 'Chart') {
                        iconI = icons.bar
                    }
                    return <Image
                        source={iconI}
                        style={{ width: 20, height: 20, tintColor: focused ? color : 'black' }}
                    />
                }

            }
            )}
        >
            
            <Tabs.Screen
                component={Home}
                name="Home"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                component={Detail}
                name="Detail"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                component={Chart}
                name="Chart"
                options={{ headerShown: false }}
            />
            
            
        </Tabs.Navigator>
    )
}