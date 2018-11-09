import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import ShoppingCart from './app/components/ShoppingCart';
import { Provider } from 'react-redux';
import store from './app/components/Store';

export default class App extends Component<Props> {
  render() {
    return (
      <ShoppingCart />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
