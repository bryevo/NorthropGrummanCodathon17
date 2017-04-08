import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import PScreen from './components/pscreen.js';
import FavScreen from './components/favScreen.js';
import HomeScreen from './components/homeScreen.js';
import ProfileScreen from './components/Profile.js';

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

const HomeTab = TabNavigator({
  Home: { screen: HomeScreen },
  Favorite: { screen: FavScreen },
  Profile: { screen: ProfileScreen },
});
const NGCApp = StackNavigator({
    Home: { screen: HomeTab },
    PScreen: { screen: PScreen },
});

AppRegistry.registerComponent('NGCApp', () => NGCApp);
