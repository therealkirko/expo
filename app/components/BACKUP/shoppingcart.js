import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ShoppingCartIcon extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>ShoppingCartIcon</Text>
      </View>
    );
  }
}
export default ShoppingCartIcon;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// Verdura theme Color #96bf49
