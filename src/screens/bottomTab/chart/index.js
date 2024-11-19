import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {LineChart} from "react-native-gifted-charts"

export default function Chart(){

    const transactions=useSelector((state)=>state.transactions.transactions);
    const incomeData=transactions.filter((t)=>t.type==="income").map((t)=>({value:t.amount,label:new Date(t.date).toLocaleDateString(),color : "red"}));
    const expenseData=transactions.filter((t)=>t.type==="expense").map((t)=>({value:t.amount,label:new Date(t.date).toLocaleDateString(),}));
    console.log(incomeData)
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Income and Expense Trends</Text>
            <LineChart
                data={incomeData}
                data2={expenseData}
                thickness={3}
                spacing={40}
                yAxisColor="#ccc"
                xAxisColor="#ccc"
                noOfSections={4}
                maxValue={Math.max(
                    ...incomeData.map((item)=>item.value),
                    ...expenseData.map((item)=>item.value)
                )}
            />
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
    flex:1,
    padding:20,
    marginHorizontal:20,
    },
    header:{
        fontSize:20,
        fontWeight:'Bold',
        marginBottom:100,
    }
})