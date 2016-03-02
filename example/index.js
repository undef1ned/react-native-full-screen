/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TextInput,
  View,
} from 'react-native';

import { NativeModules } from 'react-native';
const FullScreen = NativeModules.FullScreen;

import {Actions, Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'

class Example extends Component {
  constructor(a,b){
    super(a,b)
    this.state = {
    }
  }

  render() {
    console.log(FullScreen)
    return (
      <View style={{flex:1}}>

        <TouchableHighlight onPress={()=>{
            FullScreen.offFullScreen()
          }}>
          <Text>FullScreen on</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{
            FullScreen.onFullScreen()
          }}>
          <Text>FullScreen off</Text>
        </TouchableHighlight>


      </View>
    );
  }
}

class main extends Component{
  render(){
    return (
      <Router hideNavBar={true}>
        <Route name="Main" type="reset" component={Example}/>
      </Router>
    )
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image:{
    height: 200,
  }
});

AppRegistry.registerComponent('example', () => main);
