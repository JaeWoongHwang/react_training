import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>Hello, This is a movie app</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://images-na.ssl-images-amazon.com/images/I/51ShRC1YMrL.jpg" />
        )
    }
}
export default Movie;