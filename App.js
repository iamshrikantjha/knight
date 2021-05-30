/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { TouchableRipple, Colors } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import VideoScreen from './src/screens/VideoScreen';
import AudioScreen from './src/screens/AudioScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import MoreScreen from './src/screens/MoreScreen';
import PlaylistScreen from './src/screens/PlaylistScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
       
      <NavigationContainer>
        <Tab.Navigator
        shifting={false}
        activeColor={Colors.deepPurpleA700}
        barStyle={{
          backgroundColor: Colors.white,
        }}
        tabBarOptions={{
          // activeTintColor: Colors.deepPurpleA700,
          safeAreaInsets: {
            bottom: hp(1.5),
          }
        }}>
          <Tab.Screen
            name="Video"
            component={VideoScreen}
            options={{
              tabBarColor: Colors.deepPurpleA200,
              tabBarLabel: 'Video',
              // tabBarBadge: '1',
              tabBarBadgeStyle : {
                backgroundColor: 'red',
                fontSize: hp(7),
                width: 50,
                height: null,
                padding: 0,
                margin: 0,
              },
              tabBarIcon: ({color, size}) => (
                <Entypo name="video" color={color} size={wp(6)} />
              ),
            }}
          />
          <Tab.Screen
            name="Audio"
            component={AudioScreen}
            options={{
              tabBarOptions: {

              },
              tabBarLabel: 'Audio',
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="audiotrack" color={color} size={wp(6)} />
              ),
            }}
          />

          <Tab.Screen name="Browse" component={BrowseScreen} 
          options={{
            tabBarLabel: 'Browse',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="folder-open" color={color} size={wp(6)}  />
            ),
          }}/>
          
          <Tab.Screen name="Playlist" component={PlaylistScreen} 
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="playlist-music" color={color} size={wp(6)} />
            ),
          }}/>

          <Tab.Screen name="More" component={MoreScreen} 
          options={{
            tabBarLabel: 'More',  
            tabBarIcon: ({color, size}) => (
              <Entypo name="dots-three-horizontal" color={color} size={wp(6)} />
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
