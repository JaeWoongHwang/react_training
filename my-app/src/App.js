import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
  }
  
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title:"Inception",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51ShRC1YMrL.jpg"
          },
          {
            title: "Fight Club",
            poster: "https://images-na.ssl-images-amazon.com/images/I/5190cUTcbZL._SY445_.jpg"
          },
          {
        
            title: "Antman and Wasp",
            poster: "http://www.joblo.com/posters/images/full/antman_and_the_wasp_new.jpg"
          },
          {
            title: "Godfather part2",
            poster:  "https://i.pinimg.com/736x/7d/ec/20/7dec20321ec4bfa6ee704cb20f759d02--the-godfather-poster-godfather-.jpg"
          },
          {
            title: "Little Forest",
            poster: "https://pbs.twimg.com/media/DTj7VW6VAAAjXqM.jpg"
          }
        ]
      }) 
    }, 5000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
