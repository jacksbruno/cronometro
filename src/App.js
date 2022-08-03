/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./assets/cronometro.png')} style={styles.imgCronometro} />
        <Text style={styles.timer}>0.0</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>INICIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 65,
    marginTop: -160
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 15,
    borderRadius: 6
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});

