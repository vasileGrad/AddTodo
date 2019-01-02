import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from './containers/AddTodo';

export default class TodoApp extends Component {

  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
