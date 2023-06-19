import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Just for you</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: 'purple',
    fontSize: 14,
  },
});
