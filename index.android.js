/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';
import Header from './src/Component/Header';
import Button from './src/Component/Button';
import ItemList from './src/Component/ItemList'

export default class MyStack extends Component {

    state = {
        list: [],
        currentIndex: -1,
        currentTextInput: ""
    };

    doPush(){
        this.setState({currentIndex: this.state.currentIndex+1})
        this.setState({list:[...this.state.list, {'name': this.state.currentTextInput}]});
        this.setState({currentTextInput: ""})
    }

    doPop(){
        let alertText = this.state.list[this.state.currentIndex]
        alert(alertText.name)
        this.setState({currentIndex: this.state.currentIndex-1})
        this.setState({list:this.state.list.slice(0,this.state.currentIndex)})
    }

    render() {
        const { controllerStyle, textInputStyle} = styles;
        return (
            <View>
                <Header headerText={'MyStack'}/>
                <View style={controllerStyle}>
                    <TextInput style={textInputStyle}
                               onChangeText={(currentTextInput) => this.setState({currentTextInput})}
                               value={this.state.currentTextInput}/>
                    <Button label={'Push'} press={()=>this.doPush()}/>
                    <Button label={'Pop'} press={()=>this.doPop()}/>
                </View>
                <ItemList list={this.state.list}/>
            </View>
        );
    }
}

styles = require('./src/Style/Style');

AppRegistry.registerComponent('MyStack', () => MyStack);
