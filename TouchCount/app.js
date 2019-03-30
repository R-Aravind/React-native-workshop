import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    i: 0,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => this.setState({ i: this.state.i + 1 })}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: 'white' }}>{this.state.i}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}