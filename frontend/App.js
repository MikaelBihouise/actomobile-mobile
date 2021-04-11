import React from 'react';
import  AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NativeRouter, Route, BackButton } from "react-router-native";

import HomeScreen from './screens/HomeScreen'
import InfoScreen from './screens/InfoScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import DashboardScreen from './screens/DashboardScreen'
import DashboardAssoScreen from './screens/DashboardAssoScreen'
import SignUpFormBeneScreen from './screens/SignUpFormBeneScreen'
import SignUpFormAssoScreen from './screens/SignUpFormAssoScreen'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import token from './reducers/token'

const store = createStore(combineReducers({token}))

export default function App() {

  let [fontsLoaded] = useFonts({
    'BebasNeue_400Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}> 
        <NativeRouter>
          <BackButton>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/Info" component={InfoScreen} />
            <Route path="/Login" component={LoginScreen} />
            <Route path="/SignUp" component={SignUpScreen} />
            <Route path="/SignUpFormBene" component={SignUpFormBeneScreen} />
            <Route path="/SignUpFormAsso" component={SignUpFormAssoScreen} />
            <Route path="/Dashboard" component={DashboardScreen} />
            <Route path="/DashboardAsso" component={DashboardAssoScreen} />
          </BackButton>
        </NativeRouter>
      </Provider>
    )
  }
}
