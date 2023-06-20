import React from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';

export function Header() {
    return (
        ‹View style={styles.container}>
            ‹View style={styles.row}>
                <Text> MusicBox </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionHeaderTitle: {
    fontWeight: 600,
    fontSize: 24,
  },
  carousel: {

  },
});
