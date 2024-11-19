import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function SummaryCard(){
    const transactions=useSelector((state)=>state.transactions.transactions);

    const totalIncome=transactions.filter((t)=>t.type==="income").reduce((sum,t)=>sum+t.amount,0);
    const totalExpense=transactions.filter((t)=>t.type==="expense").reduce((sum,t)=>sum+t.amount,0);
    return(
        <View style={styles.card}>
            <Text style={styles.txt}>Total Income: ${totalIncome}</Text>
            <Text style={styles.txt}>Total Expense: ${totalExpense}</Text>
            <Text style={styles.txt}>Balance: ${totalIncome-totalExpense}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        padding:20,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        marginBottom:20,

    },
    txt:{
        fontSize:18,
        fontWeight:'bold'
    }
})