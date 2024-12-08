import React from 'react';
import { SafeAreaView } from 'react-native';
import Battery from './src/components/Battery';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Battery />
    </SafeAreaView>
  );
}


export default App;
