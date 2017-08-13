import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

//Custom components
import MovieDetail from './MovieDetail';

class MovieList extends Component {

	constructor(props){
		super(props);
		this.state = {movies: []};
	}

	componentWillMount(){

		const url = 'https://output.jsbin.com/rahutemese.json';
		
		//Fetch movies from url and parse them
		return fetch(url)
		  .then((response) => response.json())
		  .then((responseJson) => {

            const parsedJsonObj = Object.keys(responseJson.data).map(
                                              movie => responseJson.data[movie]);
			
		    this.setState( {movies: parsedJsonObj} );
		  })
		  .catch((error) => {
		    console.error(error);
		  });
		
	}
	
	//Render All Fetched Movies
	renderMovies(){
		return this.state.movies.map(movie => 
			<MovieDetail key={movie.imdbId} movie={movie} />
		)
	}

	render() {
		return (
		  <ScrollView>
		  	{this.renderMovies()}
		  </ScrollView>
		);
	}
}

export default MovieList;