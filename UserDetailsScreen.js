import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function UserDetailsScreen({ route, navigation }) {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch specific user details
    fetch(`http://10.0.2.2:3000/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [userId]);

  const handleDelete = () => {
    // Delete user from local server
    fetch(`http://10.0.2.2:3000/users/${userId}`, { method: 'DELETE' })
      .then(() => navigation.navigate('SuccessScreen'))
      .catch(error => console.error(error));
  };

  return (
    <View>
      {user && (
        <>
          <Text>Name: {user.name}</Text>
          <Text>Age: {user.age}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Edit" onPress={() => navigation.navigate('EditUser', { user })} />
          <Button title="Delete" onPress={handleDelete} />
        </>
      )}
    </View>
  );
}
