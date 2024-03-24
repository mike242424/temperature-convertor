const UNITS = {
  celsius: '°C',
  fahrenheit: '°F',
};

function convertTemperatureTo(temperaure, unit) {
  if (unit === UNITS.fahrenheit) {
    return temperaure * (9 / 5) + 32;
  } else if (unit === UNITS.celsius) {
    return (temperaure - 32) * (5 / 9);
  } else {
    throw new Error('Invalid unit');
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.fahrenheit ? UNITS.celsius : UNITS.fahrenheit;
}

export { UNITS, convertTemperatureTo, getOppositeUnit };
