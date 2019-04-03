import React from "react";
import {StyleSheet} from "react-native";

export default StyleSheet.create({

    task: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
      },
    
    taskText:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63'
    },

    taskDelete: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },

    taskDeleteText: {
    color: 'white'
    },
})