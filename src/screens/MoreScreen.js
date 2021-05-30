import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Button, Appbar, List} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MoreScreen = () => {
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
        <Appbar.Content title="More" color={Colors.deepPurple700} />

        <Appbar.Action
          icon="dots-vertical"
          color={Colors.deepPurple700}
          onPress={_handleMore}
        />
      </Appbar.Header>

      {/* TWO BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: hp(3),
        }}>
        <Button
          icon="router-wireless-settings"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Settings
        </Button>
        <Button
          icon="information-outline"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          About FOSS
        </Button>
      </View>

      <List.Item
        style={{
          backgroundColor: Colors.deepPurpleA200,
          marginHorizontal: wp(5),
          borderRadius: 8,
        }}
        title="Help VLC"
        titleStyle={{
          color: Colors.white,
          fontWeight: 'bold',
          fontSize: hp(2.6),
        }}
        description="Support the volunteers building VLC"
        descriptionStyle={{
          color: Colors.white,
          fontSize: hp(1.8),
          paddingRight: wp(10),
          paddingVertical: hp(0.7),
        }}
        left={props => <List.Icon {...props} icon="gift" color={Colors.white} style={{
          alignSelf: 'center',
        }} />}
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

export default MoreScreen;
