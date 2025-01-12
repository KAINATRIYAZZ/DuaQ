import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your local server API
    fetch('http://10.0.2.2:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>User List</Text>
      {users.map(user => (
        <Button
          key={user.id}
          title={`User ${user.id}`}
          onPress={() => navigation.navigate('UserDetailsScreen', { userId: user.id })}
        />
      ))}
    </View>
  );
}
