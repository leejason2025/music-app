import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YourSongs } from '../components/your-songs';
import { NewSongs } from '../components/new-songs';

export function Home() {
  return (
    <SafeAreaView style={styles.root}>
      <YourSongs />
      <NewSongs />
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
