import React from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HotJobCard } from './hot-job-card';

export function HotJobs() {
  const { width } = Dimensions.get('window');
  return (
    <GestureHandlerRootView>
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderTitle}>Hot Jobs This Month</Text>
          <Text>show all</Text>
        </View>
        <View style={styles.carousel}>
          <View style={{ flex: 1 }}>
            <Carousel
              width={width * 0.85}
              style={{
                width: '100%', marginRight: -20,
              }}
              height={width / 2}
              data={[...new Array(6).keys()]}
              renderItem={({ index }) => (
                <HotJobCard />
              )}
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
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
