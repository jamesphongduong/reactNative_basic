import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  createElementsFromList(list) {
    return list.map(listElement => {
      return <Text> {listElement} </Text>;
    });
  }

  render() {
    const groceryList = ['Banana', 'Coconut', 'Agave', 'Small Child'];

    return (
      <View style={styles.container}>
        <View style={styles.groceryItem}>
          {this.createElementsFromList(groceryList)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  groceryItem: {
    fontSize: 20
  }
});
