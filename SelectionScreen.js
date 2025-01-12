import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function SelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title=" USER " onPress={() => navigation.navigate('Signup')} />
      <Button title=" ADMIN " onPress={() => navigation.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
