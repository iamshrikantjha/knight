import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FAB, Appbar, Searchbar, Subheading} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomAppBar from '../components/CustomAppBar';
import LottieView from 'lottie-react-native';

const PlaylistScreen = () => {
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const _goBack = () => console.log('Went back');
  const onChangeSearch = query => setSearchQuery(query);
  const _handleSearch = () => {
    setSearch(!search);
  };

//   useEffect(() => {
//     animation.play();
//   }, [])

  const _handleMore = () => console.log('Shown more');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <CustomAppBar text={'Playlist'} />

      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          {/* <Subheading style={{
              fontSize: hp(2),
              color: Colors.grey600,
          }}>No playlist found... 😣</Subheading> */}
          <LottieView
        
        source={require('./../assets/sudoku.json')}

        autoPlay loop 
      />
      </View>

      {/* <Text>PlaylistScreen</Text> */}
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

export default PlaylistScreen;
