import { Text, TouchableOpacity } from 'react-native';
import { style } from './Button.style';
import { UNITS } from '../../utils/temperature';

const Button = ({ unit, onSetUnit }) => {
  function changeUnit() {
    return unit === UNITS.celsius
      ? onSetUnit(UNITS.fahrenheit)
      : onSetUnit(UNITS.celsius);
  }
  return (
    <TouchableOpacity style={style.button} onPress={changeUnit}>
      <Text style={style.buttonText}>
        Convert {unit === UNITS.celsius ? UNITS.celsius : UNITS.fahrenheit} to{' '}
        {unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
