import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';



import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Form2 from './header/Form2';
import HomeScreen from '../screens/HomeScreen';
import ConfigScreen from '../screens/ConfigScreen';



const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);


const RootNavigator = createMaterialTopTabNavigator({ 
  Home: HomeScreen,
  Search: Form2,
  Config: ConfigScreen,
},

{
  navigationOptions: ({ navigation }) => ({
    
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home';
      } else if (routeName === 'Search') {
        iconName = 'ios-search';
      }
      else if (routeName === 'Config'){
          iconName= 'ios-settings';
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
   
      
  }),
  tabBarOptions: {
    activeTintColor: 'grey',  //button colors
    inactiveTintColor: 'grey',
    showIcon: true,
    showLabel: false,
    style: {
        backgroundColor: 'white',
        marginTop: 24
        
    },
    indicatorStyle: {
        backgroundColor: '#00acee'
    }
  }
  
}
);



const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };