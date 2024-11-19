import AsyncStorage from "@react-native-async-storage/async-storage"

export const loadTransactions=async()=>{
    try{
        const jsonValue=await AsyncStorage.getItem("transactions")
        return jsonValue!=null ? JSON.parse(jsonValue):[];
    }catch(e){
        console.error(e);
        return [];
    }
}