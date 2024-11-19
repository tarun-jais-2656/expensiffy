import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState={
    transactions:[],
}

const svaeToStorage=async(transactions)=>{
    try{
        await AsyncStorage.setItem("transactions",JSON.stringify(transactions));
    }catch(e){
        console.error(e);
    }
}

const TransactionSLice=createSlice({
    name:'transactions',
    initialState,
    reducers:{
        addTransaction:(state,action)=>{
            state.transactions.push(action.payload);
            svaeToStorage(state.transactions);
        },

        editTransaction:(state,action)=>{
            const idx=state.transactions.findIndex(
                (t)=>t.id===action.payload.id
            )
            if(idx>=0){
                state.transactions[idx]=action.payload;
            }
            svaeToStorage(state.transactions);
        },

        deleteTransaction:(state,action)=>{
            state.transactions=state.transactions.filter(
                (t)=>t.id!==action.payload
            )
            svaeToStorage(state.transactions)
        },

        setTransactions:(state,action)=>{
            state.transactions=action.payload
        }
    }
})

export const{addTransaction,editTransaction,deleteTransaction,setTransactions}=TransactionSLice.actions;
export default TransactionSLice.reducer;