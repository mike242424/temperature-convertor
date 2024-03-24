import { Text } from 'react-native';
import { style } from './DisplayTemperature.style';

const DisplayTemperature = ({ inputValue, unit }) => {
  return (
    <Text style={style.temperatureText}>
      {inputValue} {unit}
    </Text>
  );
};

export default DisplayTemperature;
