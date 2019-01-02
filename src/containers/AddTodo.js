import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, TouchableOpacity, Image} from 'react-native';
import plus from '../../assets/images/plus.png';

class AddTodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Add new item"
          style={styles.textInputStyle}
        />
        <TouchableOpacity onPress={() => alert('added todo')}>
          <View style={styles.iconView}>
            <Image style={styles.iconImage} source={plus} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTodo

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    padding: 5
  },
  iconView: {
    height: 50,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width: 40,
    height: 40,
    padding: 20
  }
});
