const UNITS = {
  celsius: '°C',
  fahrenheit: '°F',
};

function convertTemperatureTo(currentTemperature, currentUnit) {
  if (currentUnit === UNITS.celsius) {
    return (currentTemperature * (9 / 5) + 32).toFixed(1);
  } else if (currentUnit === UNITS.fahrenheit) {
    return (((currentTemperature - 32) * 5) / 9).toFixed(1);
  } else {
    throw new Error('Invalid unit or no conversion necessary');
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.fahrenheit ? UNITS.celsius : UNITS.fahrenheit;
}

export { UNITS, convertTemperatureTo, getOppositeUnit };
