import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import RadioForm from '../../node_modules/react-native-radio-form';
import Task from './Task'

const radioData = [
  {
    labels: 'High',
    value: '1'
  },

  {
    labels: 'Medium',
    value: '2'
  },

  {
    labels: 'Low',
    value: '3'
  },
];

export default class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      taskArray: [],
      taskText: '',
    }

  }

  onSelect = (item) => {
    console.log(item);
  };
  
  render() {

    let tasks = this.state.taskArray.map((val, key) => {
      return<Task key={key} keyval = {key} val ={val}
              deleteTask={ () => this.deleteTask(key)} />
    });
 
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ToDo:</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {tasks}
        </ScrollView>

          
      
        <KeyboardAvoidingView style={styles.input} behavior="padding" enabled>
          <TextInput style={styles.textInput}
            onChangeText = {(taskText) => this.setState({taskText})}
            value= {this.state.taskText}
            placeholder = 'Input Task Here'
            placeholderTextColor = 'white'
            underlineColorAndroid = 'transparent'>
          </TextInput>
        </KeyboardAvoidingView>

        <TouchableOpacity
            onPress = {this.addTask.bind(this)}
            style={styles.addTask}>
            <Text style = {styles.addTaskText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addTask(){

    //test
    //alert('Button works');

    if(this.state.taskText){

      var d = new Date();
      this.state.taskArray.push({
        'date': d.getFullYear() +
        "/" + (d.getMonth() + 1) +
        "/" + d.getDate(),
        'task' : this.state.taskText
      });
      this.setState({taskArray: this.state.taskArray})
      this.setState({taskText: ''})
    }
  }

  deleteTask(key){
    this.state.taskArray.splice(key, 1);
    this.setState({taskArray: this.state.taskArray})

  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },

  header:{
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd'
    
  }, 

  title: {
    color: 'white',
    fontSize: 18,
    padding: 26,
    
  },

  scrollContainer: {
    flex: 1,
    marginBottom: 100,
    
  },

  input:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: 'black',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },

  addTask: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: 'lightblue',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },

  addTaskText: {
    color:'white',
    fontSize: 24, 
  }
});