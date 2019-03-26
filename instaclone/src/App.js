import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer'
// import CommentSection from './Components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    // this.state.dummyData.forEach(card =>{
    //   console.log(card);
    // })
    return (
      <div className="App">
          <SearchBar />
          <PostContainer cards={this.state.dummyData} />
          {/* <CommentSection /> */}
      </div>
    );
  }
}

export default App;
