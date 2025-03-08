import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddTransactionScreen({ navigation, addTransaction }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [transactionType, setTransactionType] = useState('Credit');
  const [category, setCategory] = useState('Shopping');

  const handleAddTransaction = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert('Please fill all fields');
      return;
    }

    const newTransaction = {
      date,
      amount,
      description,
      location,
      transactionType,
      category,
    };
    addTransaction(newTransaction);
    navigation.goBack();
  };
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 5,
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    itemAmount: {
      fontSize: 16,
      fontWeight: '600',
      color: '#007bff',
      textAlign: 'right',
    },
    detailText: {
      fontSize: 16,
      marginBottom: 10,
      color: '#333',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#eee',
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10,
      backgroundColor: '#fff',
    },
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <Picker selectedValue={transactionType} onValueChange={(itemValue) => setTransactionType(itemValue)}>
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>
      <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
      </Picker>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
  
}