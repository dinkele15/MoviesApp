import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

//Custom components
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import ModalTester from './ModalTester';

class MovieDetail extends Component{

	constructor(props){
		super(props);
	}

	render() {
		return (
		  <Card>
		  	<CardSection>
		  		<View style={styles.headerContentStyle}>
		  			<Text style={styles.headerTextStyle}>{this.props.movie.title}</Text> 	
		  			<Text style={styles.subHeaderTextStyle}>{this.props.movie.releaseYear}</Text>
		  		</View>
		  	</CardSection>
		  	<CardSection>
			  	<ModalTester movie={this.props.movie}></ModalTester>
		  	</CardSection>
		  	<CardSection>
		  		<Button>
		  			Likes
		  		</Button>
		  		<Button>
		  			Dislikes
		  		</Button>
		  	</CardSection>
		  </Card>
		);
	}
}

const styles = StyleSheet.create({
	headerContentStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#007aff',
	},
	headerTextStyle: {
		fontSize: 18,
		color: '#fff',
		fontStyle: 'italic' 
	},
	subHeaderTextStyle: {
		color: '#eee'
	}
});

export default MovieDetail;