import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';

const ngcApp = StackNavigator({
    // Interests: { screen: InterestScreen },
    Home: { screen: HomeScreen },
    Activity: { screen: Activity }
});