import {configureStore} from "@reduxjs/toolkit"
import transactionsReducer from "./transactionSlice"

export const MyStore=configureStore({
    reducer:{
        transactions:transactionsReducer
    }
})
