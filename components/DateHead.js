import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', {month: 'long'});
  const day = date.getDate();

  const formatted = `${month} ${day} ${year}  `;

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#0F3067" barStyle="light-content"/>
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#0F3067',
  },
  block: {
    padding: 16,
    backgroundColor: '#0F3067',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
