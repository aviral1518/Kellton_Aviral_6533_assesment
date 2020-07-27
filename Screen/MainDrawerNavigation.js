import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from './drawerScreens/Dashboard';
import Theme from './drawerScreens/Theme';
import DrawerLayout from './Components/DrawerLayout';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Theme,
    navigationOptions: ({ navigation }) => ({
      title: 'Change Theme',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MainDrawerNavigation = createDrawerNavigator(
  {
    Dashboard: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },
    Theme: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Change Theme',
      },
    },
  },
  {
    contentComponent: DrawerLayout,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default MainDrawerNavigation;