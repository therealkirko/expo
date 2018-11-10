import React, {Component} from 'react';
import { StyleSheet, Image }  from 'react-native';

class CustomImage extends Component{
  render() {
    return (
      <Image source={this.props.imageSource}
        style={styles.image} />
    );
  }
}

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
