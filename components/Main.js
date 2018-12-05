import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Da-Ding chat task',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={{backgroundColor:'blue'}}>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Your name"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const size = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: size,
    marginLeft: size,
    fontSize: size,
    backgroundColor: 'yellow'
  },
  nameInput: {
    height: size * 2,

    margin: size,
    paddingHorizontal: size,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: size,
    fontSize: size,
    color:'yellow'
  },
});

export default Main;
