/**
 * Created by Admin on 7/21/2017.
 */
'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({
    controllerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    textInputStyle: {
        flex: 5,
    },
    headerViewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    headerTextStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600'
    },
    listElementStyle:{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        backgroundColor: '#f8f8fa',
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e5e6eb',
        marginLeft: 5,
        marginRight: 5,
        flex: 1
    },
    buttonTextStyle:{
        alignSelf:'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle:{
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        flex: 1
    }
});