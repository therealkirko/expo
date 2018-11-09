import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import HomeScreen from  './Containers/HomeScreen';
import VegetablesScreen from  './Containers/VegetablesScreen';
import FruitsScreen from  './Containers/FruitsScreen';
import ShoppingCartIcon from './Containers/ShoppingCartIcon';
import JuiceScreen from './Containers/JuiceScreen';
import CartScreen from './Containers/CartScreen';

class ShoppingCart extends Component<Props> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen ,
  Vegetables: VegetablesScreen ,
  Fruits: FruitsScreen ,
  Juice: JuiceScreen ,
  Cart: CartScreen
}, {
  navigationOptions:{
    headerTitle:'Shopping App',
    headerRight:(
      <ShoppingCartIcon />
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// Verdura theme Color #96bf49
