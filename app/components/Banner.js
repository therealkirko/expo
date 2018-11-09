import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width , height },
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ flex: 1, height: 180, alignItems: 'center' }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={3000}
          style={this.state.size}
          autoplay
          currentPage={2}
          onAnimateNextPage={p => console.log(p)}>
          <View style={[this.state.size]}>
            <Image
              source = {require('../resources/img/1.jpg')}
              style = {styles.prev}
             />
          </View>
          <View style={[this.state.size]}>
          <Image
            source = {require('../resources/img/2.jpg')}
            style = {styles.prev}
           />
          </View>
          <View style={[this.state.size]}>
          <Image
            source = {require('../resources/img/3.jpg')}
            style = {styles.prev}
           />
          </View>
          <View style={[this.state.size]}>
          <Image
            source = {require('../resources/img/4.jpg')}
            style = {styles.prev}
           />
          </View>
          <View style={[this.state.size]}>
          <Image
            source = {require('../resources/img/5.jpg')}
            style = {styles.prev}
           />
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  prev: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
    margin: 2,
  },
});
