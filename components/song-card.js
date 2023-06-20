import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

export function SongCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionHeaderTitle}>songs Image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0A66c2',
    padding: 20,
    flex: 1,
    marginRight: 20,
    borderRadius: 9,
  },
});
