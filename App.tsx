import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  useColorScheme,
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import styles from './App.sass';
// import {Provider} from 'react-redux';
import LocationSearchComponent from './src/components/location-search/location-search.component';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function mainButton(e: any) {
    e.preventDefault;
    Alert.alert('Openning options');
  }

  return (
    // <Provider store={null}>
    <SafeAreaView style={backgroundStyle}>
      <ActivityIndicator />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <LocationSearchComponent />
      <Button title="Click Me" onPress={mainButton} />
    </SafeAreaView>
    // </Provider>
  );
}

export default App;
