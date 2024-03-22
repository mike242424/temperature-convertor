import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.root}></SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
