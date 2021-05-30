import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FAB, Button, Title, Paragraph} from 'react-native-paper';
import CustomAppBar from '../components/CustomAppBar';

import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';

const S1 = () => {
  return (
    <View>
      {/* <Text>Hi 1</Text> */}
    </View>
  );
};

const AudioScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <CustomAppBar text={'Audio'} />

      <Tabs
        mode="scrollable"
        showLeadingSpace={false}
        style={{
          backgroundColor: Colors.white,
          fontSize: 1,
          color: Colors.deepPurpleA700,
        }}>
        <TabScreen label="Artist">
          <S1 />
        </TabScreen>
        <TabScreen label="Album">
          <View style={{backgroundColor: 'white', flex: 1}} />
        </TabScreen>
        <TabScreen label="Tracks">
          <View style={{backgroundColor: 'white', flex: 1}} />
        </TabScreen>
        <TabScreen label="Genre">
          <View style={{backgroundColor: 'white', flex: 1}} />
        </TabScreen>
      </Tabs>

      <FAB
        animated={true}
        style={styles.fab}
        large
        icon="shuffle"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.deepPurpleA700,
  },
});

export default AudioScreen;
