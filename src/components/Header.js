import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Header extends Component {

	constructor(props){
		super(props);

	}

	render(){
		return(
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>{this.props.headerText}</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#2196F3',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		padding: 15,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 5,
			height: 0
		}
	},
	textStyle: {
		fontSize: 30,
		fontFamily: 'Lobster',
		color: '#fff'
	}
});

export default Header;