import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Products from '../component/Products';
import { connect } from 'react-redux';

class CartScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.cartItems.length > 0 ?
            <Products
              onPress={this.props.removeItem}
              products={this.props.cartItems} /> : <Text style={styles.notify}>No Item In Your Cart</Text>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  notify: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
  }
});


// Verdura theme Color #96bf49
