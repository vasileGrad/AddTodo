import React, {Component} from 'react';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
