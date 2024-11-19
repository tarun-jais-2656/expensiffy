import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Detail() {
    const transactions = useSelector((state) => state.transactions.transactions);
    console.log(transactions)

    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={styles.item}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                <Text style={{color: item.type=='expense' ? 'red':'green',fontSize:16,fontWeight:'600'}}>
                    {item.type.toUpperCase()}
                </Text>
                <Text style={{color: item.type=='expense' ? 'red':'green',fontSize:16,fontWeight:'600'}}>{item.amount}</Text>
                </View>
                <Text style={styles.txt}>
                    {item.category}
                </Text>
                <Text style={styles.txt}>
                    {new Date(item.date).toDateString()}
                </Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <Text style={styles.txt3}>History</Text>
            <FlatList
                data={transactions}
                // keyExtractor={(item)=>item.id.toString()}
                contentContainerStyle={styles.container}
                renderItem={renderItem}
            />
        
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
    },
    txt: {
        fontSize: 16
    },
    txt3:{
        fontSize:30,
        fontWeight:'700',
        alignSelf:'center'
    }
})