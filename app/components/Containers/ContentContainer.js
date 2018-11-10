import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { fruits } from '../Data';
import Products from '../component/Products';
import { connect } from 'react-redux';

import CustomImage from './CustomImage';

class ContentContainer extends Component {
  render() {
    return (
      <View style={styles.ContentContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Juice')}>
          <CustomImage imageSource={require('../../resources/img/products/vegetables/garlic.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Juice')}>
          <CustomImage imageSource={require('../../resources/img/products/fruits/Passion.jpg')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContentContainer;

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
  },

  col1: {
    flex: 2,
    padding: 5,
  },
  col2: {
    flex: 2,
    padding: 5,
  }
});
