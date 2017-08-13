import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component{
	constructor(props){
		super(props);
		this.state = {likesDislikes: 0}
        this._increase = this._increase.bind(this);
	}

	//Counting likes and dislikes
	_increase(){
		this.setState((prevState, x) => ({
          likesDislikes: prevState.likesDislikes + 1
        }));
	}

	render(){
		return(
				<TouchableOpacity onPress={this._increase} style={styles.buttonStyle}>
					<Text style={styles.textStyle}>{this.props.children}: {this.state.likesDislikes}</Text>
				</TouchableOpacity>
		)
	}

};

const styles = StyleSheet.create({
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
});

export default Button;