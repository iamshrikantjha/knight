import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FAB} from 'react-native-paper';
import CustomAppBar from '../components/CustomAppBar';

const VideoScreen = () => {
  


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <CustomAppBar text={'Video'} />

      {/* <Text>VideoScreen</Text> */}
      <FAB
        animated={true}
        style={styles.fab}
        large
        icon="play"
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

export default VideoScreen;
