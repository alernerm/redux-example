import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Posts from './components/Posts.jsx';
import PostForm from './components/PostForm.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
