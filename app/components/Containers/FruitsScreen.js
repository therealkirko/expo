import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { fruits } from '../Data';
import Products from '../component/Products';
import { connect } from 'react-redux';

class FruitsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Products products={fruits} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch({type: 'ADD_TO_CART', payload: product })
  }
}
export default connect(null, mapDispatchToProps)(FruitsScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// Verdura theme Color #96bf49
