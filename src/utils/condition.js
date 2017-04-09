// See: https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary&MR=1
export const variativeConditionVariantList = [
  'Light',
  'Heavy'
];
export const variativeConditionList = [
  'Drizzle',
  'Rain',
  'Snow',
  'Snow Grains',
  'Ice Crystals',
  'Ice Pellets',
  'Hail',
  'Mist',
  'Fog',
  'Fog Patches',
  'Smoke',
  'Volcanic Ash',
  'Widespread Dust',
  'Sand',
  'Haze',
  'Spray',
  'Dust Whirls',
  'Sandstorm',
  'Low Drifting Snow',
  'Low Drifting Widespread Dust',
  'Low Drifting Sand',
  'Blowing Snow',
  'Blowing Widespread Dust',
  'Blowing Sand',
  'Rain Mist',
  'Rain Showers',
  'Snow Showers',
  'Snow Blowing Snow Mist',
  'Ice Pellet Showers',
  'Hail Showers',
  'Small Hail Showers',
  'Thunderstorm',
  'Thunderstorms and Rain',
  'Thunderstorms and Snow',
  'Thunderstorms and Ice Pellets',
  'Thunderstorms with Hail',
  'Thunderstorms with Small Hail',
  'Freezing Drizzle',
  'Freezing Rain',
  'Freezing Fog'
];
export const regularConditionList = [
  'Patches of Fog',
  'Shallow Fog',
  'Partial Fog',
  'Overcast',
  'Clear',
  'Partly Cloudy',
  'Mostly Cloudy',
  'Scattered Clouds',
  'Small Hail',
  'Squalls',
  'Funnel Cloud',
  'Unknown Precipitation',
  'Unknown'
];

export const availableConditionList = variativeConditionList.reduce((a, b) => (
  a.concat([b, ...variativeConditionVariantList.map(v => `${v} b`)])
), regularConditionList.slice());

const comfortConditionList = [
  'Mist',
  'Light Mist',
  'Heavy Mist',
  'Fog',
  'Light Fog',
  'Heavy Fog',
  'Fog Patches',
  'Light Fog Patches',
  'Heavy Fog Patches',

  'Patches of Fog',
  'Shallow Fog',
  'Partial Fog',
  'Overcast',
  'Clear',
  'Partly Cloudy',
  'Mostly Cloudy',
  'Scattered Clouds',
  'Small Hail',
  'Unknown'
];

export function isComfortCondition(condition) {
  return comfortConditionList.includes(condition)
}
