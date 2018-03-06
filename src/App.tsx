import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { ScaledSheet } from "react-native-size-matters";

interface Props { };
interface State {
  onAdd: boolean;
  name: string;
}

export default class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      onAdd: false,
      name: "",
    }
  }

  onCreate = () => {
    this.setState({
      onAdd: true,
    });
  }

  create = () => {
    console.log("new book club ", this.state.name, " created")
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.onAdd
          ?
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder={"book club name"}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              autoFocus
              autoCorrect={false}
              style={styles.nameInput} />
            <TouchableOpacity style={styles.button} onPress={() => this.create()}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
          :
          <View>
            <Text style={styles.welcome}>
              Welcome!
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => this.onCreate()}>
              <Text>Create</Text>
            </TouchableOpacity>
          </View>}
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    top: "150@ms0.6",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
  },
  welcome: {
    fontSize: "20@ms0.6",
    textAlign: 'center',
    margin: "10@ms0.6",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: "5@ms0.6",
  },
  button: {
    width: "200@ms0.6",
    borderWidth: 1,
    borderColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  nameInput: {
    width: "200@ms0.6",
    borderBottomWidth: 1,
    borderColor: "#333333",
    marginBottom: "5@ms0.6",
  }
});
