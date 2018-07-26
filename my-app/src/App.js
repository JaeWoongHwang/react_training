import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Inception",
  "Fight Club",
  "Antman and Wasp",
  "Godfather2"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51ShRC1YMrL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/5190cUTcbZL._SY445_.jpg",
  "http://www.joblo.com/posters/images/full/antman_and_the_wasp_new.jpg",
  "https://i.pinimg.com/736x/7d/ec/20/7dec20321ec4bfa6ee704cb20f759d02--the-godfather-poster-godfather-.jpg"
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title = {movieTitles[0]} poster = {movieImages[0]}/>
        <Movie title = {movieTitles[1]} poster = {movieImages[1]}/>
        <Movie title = {movieTitles[2]} poster = {movieImages[2]}/>
        <Movie title = {movieTitles[3]} poster = {movieImages[3]}/>
      </div>
    );
  }
}

export default App;
