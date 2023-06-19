import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import linkedin from '../assets/linkedin.png';

export function SongCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.sectionHeaderTitle}>App Image</Text>
      </View>
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
  cardText: {
    color: 'white',
  },
  cardHeader: {
    gap: 10,
    flexDirection: 'row',
  },
  cardHeaderTitle: {
    fontWeight: 600,
    fontSize: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  cardHeaderText: {
    gap: 9,
  },
  tags: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 30,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 7,
    borderRadius: 6,
  },
  tagLabel: {
    color: 'white',
  },
  metadata: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  metadataText: {
    color: 'white',
  },
  metadataCount: {
    fontWeight: 600,
  },
  cardHeaderAction: {
    marginLeft: 'auto',
  },
});
