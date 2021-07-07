import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
// import SearchBar from './Components/SearchBar/SearchBar';
// import PostContainer from './Components/PostContainer/PostContainer';
import PostPage from './Components/PostContainer/PostPage';
import LoginPage from './Components/LoginPage/LoginPage'
import withAuthenticate from './Authentication/withAuthenticate'
// import CommentSection from './Components/CommentSection/CommentSection';

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostPage);

class App extends Component {
  constructor() {
    super();
  }


  
  render() {

  
    console.log(ComponentFromWithAuthenticate);
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
      );
    }
  }



export default App;
