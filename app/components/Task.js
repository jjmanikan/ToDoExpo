import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./../styles/styles.js"

export default class Task extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.task}>
        
        <Text style={styles.taskText}>{this.props.val.date}</Text>
        <Text style={styles.taskText}>{this.props.val.task}</Text>

        <TouchableOpacity onPress={this.props.deleteTask} style = {styles.taskDelete}>
            <Text style={styles.taskDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
