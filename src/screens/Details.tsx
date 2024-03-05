import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View>
      <Text style={styles.smallText}>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 15,
  },
});
