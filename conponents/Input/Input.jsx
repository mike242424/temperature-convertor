import { View, TextInput, Text } from 'react-native';
import { style } from './Input.style';

const Input = ({ inputValue = 0, onSetInputValue, unit }) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Type your temperature"
        maxLength={3}
        defaultValue={inputValue.toString()}
        onChangeText={(text) => onSetInputValue(text)}
      />
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
