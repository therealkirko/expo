import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import Banner from '../Banner';
import ContentContainer from './ContentContainer';

class HomeScreen extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Banner />
        <ContentContainer />
      </ScrollView>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
