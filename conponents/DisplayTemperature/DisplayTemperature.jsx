import { Text } from 'react-native';
import { style } from './DisplayTemperature.style';
import { convertTemperatureTo, getOppositeUnit } from '../../utils/temperature';

const DisplayTemperature = ({ inputValue, unit }) => {
  let convertedUnit = getOppositeUnit(unit);
  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      convertedUnit = '';
      return '';
    } else {
      return convertTemperatureTo(inputValue, unit);
    }
  }

  return (
    <Text style={style.temperatureText}>
      {getConvertedTemperature()} {convertedUnit}
    </Text>
  );
};

export default DisplayTemperature;
