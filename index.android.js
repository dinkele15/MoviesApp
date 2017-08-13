// Android

/*    ____                 __                     __   ____           ____  _       __            ____       __
   / __ \___ _   _____  / /___  ____  ___  ____/ /  / __ )__  __   / __ \(_)___  / /______     / __ \___  / /_  ____ ______
  / / / / _ \ | / / _ \/ / __ \/ __ \/ _ \/ __  /  / __  / / / /  / / / / / __ \/ //_/ __ \   / /_/ / _ \/ __ \/ __ `/ ___/
 / /_/ /  __/ |/ /  __/ / /_/ / /_/ /  __/ /_/ /  / /_/ / /_/ /  / /_/ / / / / / ,< / /_/ /  / ____/  __/ / / / /_/ / /
/_____/\___/|___/\___/_/\____/ .___/\___/\__,_/  /_____/\__, /  /_____/_/_/ /_/_/|_|\____/  /_/    \___/_/ /_/\__,_/_/
                            /_/                        /____/
*/

// Import library to help create a component
import React, {Component} from 'react';
import {Text, AppRegistry, View} from 'react-native';

//Custom components
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

// Create a component

export default class App extends Component{
  render() {
    return (
      <View>
        <Header headerText={'Movies'}/>
        <MovieList/>  
      </View>
    );
  }
}

// Render it to device

AppRegistry.registerComponent('MoviesApp', () => App);