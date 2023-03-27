import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from './location-search.component.sass';

function LocationSearchComponent(): JSX.Element {
  const state = {
    log: 23,
  };

  return (
    <View style={styles.locationSearchComponent}>
      <Text>Search forecast ${state.log}</Text>
      <TextInput
        style={styles.locationSearchTextInput}
        defaultValue="Enter a new forecast location"
      />
    </View>
  );
}

export default LocationSearchComponent;
