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
  constructor(props){
    super(props)
    this.state = {
      timer: 0,
      btnInicio: 'iniciar',
      lastTime: null
    }
    this.timerSetInterval = null

    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar(){
    if(this.timerSetInterval != null){
      clearInterval(this.timerSetInterval)
      this.timerSetInterval = null
      this.setState({ btnInicio: 'continuar' })
    }else{
      this.timerSetInterval = setInterval(() => {
        this.setState({ timer: this.state.timer + 0.1 })
      }, 100)
      this.setState({ btnInicio: 'pausar' })
    }
  }
  limpar(){
    clearInterval(this.timerSetInterval)
    this.timer = null
    this.setState({
      lastTime: this.state.timer,
      timer:0,
      btnInicio:'iniciar' 
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./assets/cronometro.png')} style={styles.imgCronometro} />
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.btnInicio}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltimoTempo}>
          <Text style={[styles.textoCorrida, { color: this.state.lastTime ? '#fff' : '#00aeef' }]}>Último tempo: { this.state.lastTime ? this.state.lastTime.toFixed(2) : '' }s</Text>
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
    color: '#00aeef',
    textTransform: 'uppercase'
  },
  areaUltimoTempo: {
    marginTop: 45,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
  }
});

