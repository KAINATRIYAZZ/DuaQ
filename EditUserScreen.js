import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function EditUserScreen({ route, navigation }) {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    // Update user details in local server
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, email })
    })
      .then(() => navigation.navigate('Success'))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Text>Edit User</Text>
      <TextInput placeholder="Name" onChangeText={setName} value={name} />
      <TextInput placeholder="Age" onChangeText={setAge} value={age} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <Button title="OK" onPress={handleSave} />
    </View>
  );
}
