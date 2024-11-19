import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SummaryCard from "../../../components/summaryCard.js";
import { useDispatch } from "react-redux";
import { loadTransactions } from "../../../utility/storage.js";
import { setTransactions } from "../../../redux/transactionSlice.js";
import { AddEntryModal } from "../../../components/addEntryModal.js/index.js";

export default function Home(){
    const[isModalVisible,setModalVisible]=useState(false);
    const dispatch=useDispatch();

    useEffect(()=>{
        async function fetchData(){
            const transactions=await loadTransactions();
            dispatch(setTransactions(transactions));
        }
        fetchData();
    },[dispatch]);
    return(
        <SafeAreaView style={styles.container}>
            <SummaryCard/>
            <View style={styles.flex}>
            <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.btn}>
                <Text style={styles.btntxt1}>Add Entry</Text>
            </TouchableOpacity>
            </View>
            <AddEntryModal
            isVisible={isModalVisible}
            onClose={()=>setModalVisible(false)}
            />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        marginHorizontal:15,
    },
    flex:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        backgroundColor:'#3981ad',
        width:100,
        borderRadius:10,
        padding:10,
        marginBottom:10,
    },
    btntxt1:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:15,
        fontWeight:'600'
    },
})