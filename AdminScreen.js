import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Admin Login</Text>
      <TextInput placeholder="ID" onChangeText={setId} value={id} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={() => navigation.navigate('UserListScreen')} />
    </View>
  );
}
