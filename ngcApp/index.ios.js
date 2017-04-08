import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import CoolStuff from './components/CoolStuff.js';
import ProfileScreen from './components/Profile.js';
import HomeScreen from './components/Home.js';
import InterestScreen from './components/Interests';
// import ListView from './components/ListView';

// import meetup from 'meetup-api';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_na5VWr1z6yYvttDGTZrv3QOaa4Rxd3g",
    authDomain: "ngc-app-2017.firebaseapp.com",
    databaseURL: "https://ngc-app-2017.firebaseio.com",
    projectId: "ngc-app-2017",
    storageBucket: "ngc-app-2017.appspot.com",
    messagingSenderId: "817986584522"
  };
  firebase.initializeApp(config);

//   var meetup = require('./node_modules/meetup-api/lib/meetup')({
// 	key: '314c421c286c3e7a5f1f262135425d6f'
// });

// const HomeTab = TabNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });
const InterestTab = TabNavigator({
  Home: { screen: InterestScreen },
  Profile: { screen: ProfileScreen },
});
const ngcApp = StackNavigator({
    Home: { screen: InterestTab },
    CoolStuff: { screen: CoolStuff },
});

AppRegistry.registerComponent('ngcApp', () => ngcApp);
