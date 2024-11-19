import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {icons } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('BottomTab');
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={icons.accounting}
                style={{height:75,width:75}}
            />
            <Text style={styles.txt}>Expensiffy</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#51a6f5' },
    txt:{
        fontSize:40,
        fontWeight:'700'
    }
});