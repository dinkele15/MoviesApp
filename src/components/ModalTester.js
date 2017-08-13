import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Linking } from 'react-native';
import Modal from 'react-native-modal';

class ModalTester extends Component {

	constructor(props){
		super(props);
		this.state = { isModalVisible: false,
		               url: `http://www.imdb.com/title/${this.props.movie.imdbId}/`,
		               modifiedReleaseDate: this.props.movie.releaseDate.slice(0, 10)};
	}

	_showModal = () => this.setState({ isModalVisible: true })

	_hideModal = () => this.setState({ isModalVisible: false })

	render () {
		return (
		  <View style={{ flex: 1 }}>
		    <TouchableOpacity onPress={this._showModal}>
		      <Image style={styles.imageStyle} source={{ uri: this.props.movie.cover }}/>
		    </TouchableOpacity>
		    <Modal isVisible={this.state.isModalVisible}>
		      <View style={styles.modalWindowStyle}>
		      	<View style={styles.headerStyle}>
		      		<Text style={styles.headerTextStyle}>{this.props.movie.title}</Text>	
		      	</View>
		      	<View style={styles.listStyle}>
		      		<Text style={styles.listTextStyle}>Release Date: {this.state.modifiedReleaseDate}</Text>
			      	<Text style={styles.listTextStyle}>Release Country: {this.props.movie.releaseCountry}</Text>
			      	<Text style={styles.listTextStyle}>Release Year: {this.props.movie.releaseYear}</Text>
			      	<Text style={styles.listTextStyle}>Release Month: {this.props.movie.releaseMonth}</Text>
			      	<Text style={styles.listTextStyle}>Release Day: {this.props.movie.releaseDay}</Text>	
		      	</View>
		        <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL(this.state.url)}>
		        	<Text style={styles.buttonTextStyle}>See more on IMDB</Text>
		        </TouchableOpacity>
		      </View>
		    </Modal>
		  </View>
		)
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	modalWindowStyle: {
		flex: 1,
		backgroundColor: '#fff',
	},
	headerStyle: {
		flex: 2,
		justifyContent: 'center',
		backgroundColor: '#2196F3'
	},
	headerTextStyle: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
		fontStyle: 'italic' 
	},
	listStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 6
	},
	listTextStyle: {
		backgroundColor: '#fff',
		color: '#333'
	},
	buttonStyle: {
		flex: 2,
		backgroundColor: '#2196F3',
		justifyContent: 'center',
    	alignItems: 'center'
	},
	buttonTextStyle: {
		color: '#fff'
	}
});

export default ModalTester;