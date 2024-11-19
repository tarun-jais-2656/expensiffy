import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactionSlice";
import Modal from "react-native-modal";

export const AddEntryModal = ({ isVisible, onClose }) => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const dispatch = useDispatch();


    const handleSave = () => {
        const transactions = {
            // id: DateNow(),
            amount: parseFloat(amount),
            category,
            type,
            date: new Date().toISOString(),
        }
        dispatch(addTransaction(transactions));
        onClose();
    }
    return (
        <Modal
            visible={isVisible}
            style={styles.mdl}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <TextInput
                    placeholder="Type: expense/income------->only in small letter"
                    keyboardType="numeric"
                    value={type}
                    style={styles.input}
                    onChangeText={setType}
                />
                <TextInput
                    placeholder="Amount"
                    keyboardType="numeric"
                    value={amount}
                    style={styles.input}
                    onChangeText={setAmount}
                />
                <TextInput
                    placeholder="Category"
                    keyboardType="numeric"
                    value={category}
                    style={styles.input}
                    onChangeText={setCategory}
                />

                <TouchableOpacity onPress={handleSave} style={styles.btn1}>
                    <Text style={styles.btntxt1}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={onClose}>
                    <Text style={styles.btntxt2}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '60%',
        backgroundColor: '#9ac8f5',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    mdl: {
        justifyContent: 'flex-end',
        margin: 0,

    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    btn1: {
        backgroundColor: '#3981ad',
        width: 100,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    btntxt1: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600'
    },
    btn2: {
        backgroundColor: '#8a082b',
        width: 100,
        borderRadius: 10,
        padding: 10,
    },
    btntxt2: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600'
    }
})