import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movie = [
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
  }
]


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {
    greeting : "Welcome to Movie Chart!"
  }
  
  
  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        greeting: "Enjoy Our Service"
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
      {this.state.greeting}
      {movie.map((movie, index) =>{
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
      </div>
    );
  }
}

export default App;
