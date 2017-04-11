import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import CoolStuff from './components/CoolStuff.js';
import ProfileScreen from './components/Profile.js';
import HomeScreen from './components/Home.js';
import InterestScreen from './components/Interests';
import Register from './components/Register.js';
import Root from './components/Root';
import Login from './components/Login.js';
import Activity from './components/Activity';
console.disableYellowBox = true;

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
  // Profile: { screen: ProfileScreen },
});
// const ngcApp = StackNavigator({
//     Home: { screen: InterestTab },
//     CoolStuff: { screen: CoolStuff },
// });

const ngcApp = StackNavigator({
  Home: { screen: Root },
  Register: { screen: Register },
  Login: { screen: Login },
  Interests: { screen: InterestScreen },
  Dashboard: { screen: HomeTab },
  Activity: { screen: Activity },
});


AppRegistry.registerComponent('ngcApp', () => ngcApp);
