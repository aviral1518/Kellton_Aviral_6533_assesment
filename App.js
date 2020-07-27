import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import MainDrawerNavigation from './Screen/MainDrawerNavigation';

const Auth = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
});


const App = createSwitchNavigator({ 
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  
  Auth: {
    screen: Auth,
  },
  
  MainDrawerNavigation: {
    screen: MainDrawerNavigation,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);