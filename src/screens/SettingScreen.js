import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FAB, Appbar, Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SettingsScreen = () => {
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const _goBack = () => console.log('Went back');
  const onChangeSearch = query => setSearchQuery(query);
  const _handleSearch = () => {
    setSearch(!search);
  };

  const _handleMore = () => console.log('Shown more');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
          <Appbar.Header
          style={{
            backgroundColor: Colors.white,
            elevation: 0,
          }}>
          <Appbar.Action
            icon="vlc"
            color={Colors.deepPurple700}
            onPress={_handleSearch}
          />
          <Appbar.Content title="Explore" color={Colors.deepPurple700} />
         
          <Appbar.Action
            icon="dots-vertical"
            color={Colors.deepPurple700}
            onPress={_handleMore}
          />
        </Appbar.Header>
      

      {/* <Text>SettingsScreen</Text> */}
      <FAB
        animated={true}
        style={styles.fab}
        large
        icon="plus"
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

export default SettingsScreen;
