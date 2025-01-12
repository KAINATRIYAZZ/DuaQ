import React from 'react';
import { View, Button, Text } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <View>
      <Text>Update Success</Text>
      <Button title="Back Home" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
