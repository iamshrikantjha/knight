import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, FAB, Appbar, Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomAppBar = (props) => {
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const _goBack = () => console.log('Went back');
  const onChangeSearch = query => setSearchQuery(query);
  const _handleSearch = () => {
    setSearch(!search);
  };
  const _handleMore = () => console.log('Shown more');



  return (
    <>
      {search === false ? (
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
          <Appbar.Content title={props.text} color={Colors.deepPurple700} />
          <Appbar.Action
            icon="magnify"
            color={Colors.deepPurple700}
            onPress={_handleSearch}
          />
          <Appbar.Action
            icon="backup-restore"
            color={Colors.deepPurple700}
            onPress={_handleSearch}
          />
          <Appbar.Action
            icon="dots-vertical"
            color={Colors.deepPurple700}
            onPress={_handleMore}
          />
        </Appbar.Header>
      ) : (
        <Appbar.Header
          style={{
            backgroundColor: Colors.white,
            elevation: 0,
          }}>
          {/* <Appbar.Content title="VLC" color={Colors.deepPurple700} /> */}
          <Searchbar
            placeholder="Search"
            onIconPress={_handleSearch}
            icon="reorder-horizontal"
            iconColor={Colors.deepPurpleA700}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Appbar.Header>
      )}
    </>
  );
};

export default CustomAppBar;
