import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import Input from './conponents/Input/Input';
import { useState } from 'react';
import DisplayTemperature from './conponents/DisplayTemperature/DisplayTemperature';

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState('°C');
  return (
    <ImageBackground
      style={style.backgroundImage}
      source={require('./assets/hot.png')}
    >
      <SafeAreaProvider>
        <SafeAreaView style={style.root}>
          <View style={style.container}>
            <DisplayTemperature inputValue={inputValue} unit={unit} />
            <Input
              inputValue={inputValue}
              onSetInputValue={setInputValue}
              unit={unit}
            />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
