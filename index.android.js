/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button, TextInput, Image, TouchableHighlight
} from 'react-native';
import Header from './src/components/header'


const styles = StyleSheet.create({
        container: {
            backgroundColor: 'black',
            justifyContent: 'flex-start',
            flex: 1,
        },
        contentArea: {
            flexDirection: 'column',
            backgroundColor: '#a4cdf0',
            justifyContent: 'space-between',
            flex: 1,
            marginHorizontal: 5
        },
        textUpper: {
            textAlign: 'center'
        },
        instructions: {
            textAlign: 'center',
            fontFamily: 'dincond_bold',
            color: '#333333',
            marginBottom: 5,
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 20
        }
    }
);


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {sum: 0, text: ''}
    }

    render() {
        const items = ['Thanks for riding ofo!', 'Don\'t forget to lock the bike!'];
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.contentArea}>

                    <View style={{
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        alignSelf: 'stretch',
                        marginTop: 5,
                        paddingVertical: 10
                    }}>
                        {items.map((value) => <Text key={value} style={{
                            textAlign: 'center',
                            fontFamily: 'dincond_bold',
                            color: '#333333'
                        }}>{value}</Text>)}
                    </View>
                    <View style={{alignSelf: 'center', backgroundColor: 'green'}}>
                        <Text>point</Text>
                    </View>
                    <View style={{
                        marginHorizontal: 20,
                        marginBottom: 20,
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <View >
                            <TouchableHighlight style={{
                                padding: 10,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 30,
                                marginBottom:10
                            }}
                            ><Image source={require('./mc.png')}
                                    style={{width: 30, resizeMode: 'contain'}}/>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            height: 250,
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                            paddingHorizontal: 20
                        }}>
                            <Text style={styles.instructions}>The trip cost you</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 35,
                                fontFamily: 'dincond_bold'
                            }}>${this.state.sum.toFixed(2)}</Text>
                            <Text style={{textAlign: 'center', fontFamily: 'Bauhaus'}}>Detail></Text>
                            <View style={{
                                marginTop: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderColor: 'grey',
                                borderWidth: 1,
                                alignItems: 'center',
                                height: 40
                            }}>
                                <Image source={require('./mc.png')}
                                       style={{width: 30, resizeMode: 'contain', marginLeft: 15}}/>
                                <TextInput style={{width: 100, borderColor: 'white'}} password={true}/>
                                <Image source={require('./black_arrow.png')}
                                       style={{width: 15, resizeMode: 'contain', marginRight: 15}}/>
                            </View>
                            <View style={{
                                marginTop: 10,
                                height: 40,
                                backgroundColor: 'orange',
                                justifyContent: 'center'
                            }}>
                                <Button title='Confirm And Pay' color='orange' onPress={() => {
                                }} style={{padding: 10}}/>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class pp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}*/


AppRegistry.registerComponent('pp', () => Index);
