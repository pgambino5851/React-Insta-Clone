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
      dummyData: [],
      search: '',
      filteredData: []
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  updateLikes = (id) => {

    let posts = this.state.dummyData.slice();
    posts = posts.map(post => {
      if(post.id === id){
        console.log(post.likes);
        post.likes += 1;
        return post;
      } else {
        return post;
      }
    })

    this.setState({ dummyData: posts })
  }

  updateSearch = event => {
    console.log(event.target);
    this.setState({
        [event.target.name]: event.target.value,
    })
}


  filterPosts = event => {
    event.preventDefault();
    console.log("Search is", this.state.search);
    posts = this.state.dummyData;
    let posts = posts.filter(post => {
     return (post.username === this.state.search);
    })

    this.setState({
      filteredData: posts
    })
  }

  render() {
    // this.state.dummyData.forEach(card =>{
    //   console.log(card);
    // })

    // console.log(this.state.dummyData);
    return (
      <div className="App">
          <SearchBar 
          search={this.state.search} 
          updateSearch={this.updateSearch}
          filterPosts={this.filterPosts}
          />
          <PostContainer 

          cards={this.state.search.length === 0 ? this.state.dummyData : this.state.filteredData } 
          updateLikes={this.updateLikes}/>
          {/* <CommentSection /> */}
      </div>
    );
  }
}

export default App;
