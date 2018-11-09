import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';

class HomeScreen extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button title="Vegetables" onPress={() => this.props.navigation.navigate('Vegetables')} />
        <Button title="Fruits" onPress={() => this.props.navigation.navigate('Fruits')} />
        <Button title="Juice" onPress={() => this.props.navigation.navigate('Juice')} />
      </ScrollView>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
