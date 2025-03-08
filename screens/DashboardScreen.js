import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation, onSignOut, transactions }) {
  const handleLogout = () => {
    onSignOut();
    navigation.navigate('SignIn');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}
    >
      <Text>{item.description}</Text>
      <Text>{item.amount}</Text>
    </TouchableOpacity>
  );

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
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}