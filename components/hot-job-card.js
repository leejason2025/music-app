import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import linkedin from '../assets/linkedin.png';

export function HotJobCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={linkedin} style={styles.logo} />
        <View style={styles.cardHeaderText}>
          <Text style={[styles.cardText, styles.cardHeaderTitle]}>Senior iOS Developer</Text>
          <Text style={styles.cardText}>San Diego, CA</Text>
        </View>
        <IconButton icon="bookmark-outline" iconColor="white" style={styles.cardHeaderAction} />
      </View>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagLabel}>Fulltime</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagLabel}>2-3 Years</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagLabel}>On Site</Text>
        </View>
      </View>
      <View style={styles.metadata}>
        <Text style={styles.metadataText}>3 days ago</Text>
        <Text style={[styles.metadataText, styles.metadataCount]}>58 Applicants</Text>
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
