import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    const userData = { name, age, email };

    try {
      let response = await fetch('http://10.0.2.2:3000/test', { // Use 'http://10.0.2.2:3000/test' for Android emulator
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        const userId = result.id; // Assuming server returns the new user ID
        Alert.alert('Success', `User signed up successfully with ID: ${userId}`);
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', result.message || 'Failed to sign up.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignupScreen;





/*  


import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      // Save user data to Firestore
      await firestore().collection('Users').add({
        name: name,
        age: age,
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Success', 'User data saved successfully to Firestore!');
      clearFields();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save user data to Firestore.');
    }
  };

  const clearFields = () => {
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Firestore Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Save to Firestore" onPress={handleSignup} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignupScreen;

*/