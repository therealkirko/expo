import React, {Component} from 'react';
import {StyleSheet, ScrollView, Easing} from 'react-native';
import Drawer, DrawerNavigator from 'react-native-drawer-menu';

const Index = DrawerNavigator({
  render() {
    // prepare your drawer content
    var drawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftTop}/>
      <View style={styles.leftBottom}>
        <View><Text>Drawer Content</Text></View>
      </View>
    </View>);
    // customize drawer's style (Optional)
    var customStyles = {
      drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      mask: {}, // style of mask if it is enabled
      main: {} // style of main board
    };
    return (
      <Drawer
        style={styles.container}
        drawerWidth={300}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        customStyles={{drawer: styles.drawer}}
        drawerPosition={Drawer.positions.Right}
        onDrawerOpen={() => {console.log('Drawer is opened');}}
        onDrawerClose={() => {console.log('Drawer is closed')}}
        easingFunc={Easing.ease}
      >
        <View style={styles.content}>
          <Text>{Object.values(Drawer.positions).join(' ')}</Text>
          <Text>{Object.values(Drawer.types).join(' ')}</Text>
        </View>
      </Drawer>
    );
  }
});
