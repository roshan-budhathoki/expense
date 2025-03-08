import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleSignIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsSignedIn(true);
      return true;
    }
    return false;
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="DashboardScreen">
              {(props) => (
                <DashboardScreen
                  {...props}
                  onSignOut={handleSignOut}
                  transactions={transactions}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="TransactionDetails">
              {(props) => <TransactionDetailsScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddTransaction">
              {(props) => <AddTransactionScreen {...props} addTransaction={addTransaction} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="SignIn">
            {(props) => <SignInScreen {...props} onSignIn={handleSignIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}