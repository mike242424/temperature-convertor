import { View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';

import { useEffect, useState } from 'react';
import Input from './conponents/Input/Input';
import DisplayTemperature from './conponents/DisplayTemperature/DisplayTemperature';
import Button from './conponents/Button/Button';

import { isFreezingTemperaure, UNITS } from './utils/temperature';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState(UNITS.celsius);
  const [currentBackground, setCurrentBckground] = useState(coldBackground);

  useEffect(() => {
    if (isNaN(inputValue)) return;

    setCurrentBckground(
      isFreezingTemperaure(inputValue, unit) ? coldBackground : hotBackground,
    );
  }, [inputValue, unit]);

  return (
    <ImageBackground style={style.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={style.root}>
          <View style={style.container}>
            <DisplayTemperature inputValue={inputValue} unit={unit} />
            <Input
              inputValue={inputValue}
              onSetInputValue={setInputValue}
              unit={unit}
            />
            <Button unit={unit} onSetUnit={setUnit} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
