module.exports = {
  'Theater On': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/activity', payload: 'Watch TV'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan/switch/set', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan Light/switch/set', payload: 'on'},
  ],
  'Theater Off': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/activity', payload: 'PowerOff'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan Light/switch/set', payload: 'off'},
  ],
  'Kitchen On': [
    {type: 'mqtt', topic: 'smartthings/Kitchen Lights/switch/set', payload: 'on'},
  ],
  'Kitchen Off': [
    {type: 'mqtt', topic: 'smartthings/Kitchen Lights/switch/set', payload: 'off'},
  ],
  'Outside On': [
    {type: 'mqtt', topic: 'smartthings/Porch Light/switch/set', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Outside Lights/switch/set', payload: 'on'},
  ],
  'Outside Off': [
    {type: 'mqtt', topic: 'smartthings/Porch Light/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Outside Lights/switch/set', payload: 'off'},
  ],
  'Office on': [
    {type: 'mqtt', topic: 'bravia/sony-810c/set/power', payload: 'on'},
  ],
  'Office Off': [
    {type: 'mqtt', topic: 'bravia/sony-810c/set/power', payload: 'off'},
  ],
  'Bathroom On': [
    {type: 'mqtt', topic: 'smartthings/Bathroom Light/switch/set', payload: 'on'},
  ],
  'Bathroom Off': [
    {type: 'mqtt', topic: 'smartthings/Bathroom Light/switch/set', payload: 'off'},
  ],
  'Bedroom On': [
    {type: 'mqtt', topic: 'bravia/sony-850c/set/power', payload: 'on'},
    {type: 'mqtt', topic: 'tivo/tivo-bolt/set/', payload: 'LIVETV'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Light/switch/set', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Fan/switch/set', payload: 'on'},
    {type: 'macro', name: 'Bathroom On'},
  ],
  'Bedroom Off': [
    {type: 'mqtt', topic: 'bravia/sony-850c/set/power', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Light/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Fan/switch/set', payload: 'off'},
    {type: 'macro', name: 'Bathroom Off'},
  ],
  'All Off': [
    {type: 'macro', name: 'Spa Off'},
    {type: 'macro', name: 'Theater Off'},
    {type: 'macro', name: 'Kitchen Off'},
    {type: 'macro', name: 'Outside Off'},
    {type: 'macro', name: 'Office Off'},
    {type: 'macro', name: 'Bedroom Off'},
  ],
  'Bedtime': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/activity', payload: 'PowerOff'},
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/activity', payload: 'PowerOff'},
    {type: 'mqtt', topic: 'harmony/harmony-hub2/set/activity', payload: 'PowerOff'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan Light/switch/set', payload: 'on'},
    {type: 'macro', name: 'Kitchen On'},
    {type: 'macro', name: 'Outside Off'},
    {type: 'macro', name: 'Office Off'},
    {type: 'macro', name: 'Bedroom On'},
    {type: 'mqtt', topic: 'nest/Falsetto/Hallway Thermostat/set/target_temperature_f', payload: '75'}
  ],
  'Good Night': [
    {type: 'macro', name: 'Spa Off'},
    {type: 'macro', name: 'Theater Off'},
    {type: 'macro', name: 'Kitchen Off'},
    {type: 'macro', name: 'Outside Off'},
    {type: 'macro', name: 'Office Off'},
    {type: 'macro', name: 'Bathroom Off'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Light/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Bedroom Fan/switch/set', payload: 'on'},
    {type: 'mqtt', topic: 'nest/Falsetto/Hallway Thermostat/set/target_temperature_f', payload: '75'}
  ],
  'TV Mood': [
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan/switch/set', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan/level/set', payload: '50'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan Light/switch/set', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Kitchen Lights/switch/set', payload: 'off'},
  ],
  'Watch TV': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/activity', payload: 'Watch TV'},
    {type: 'macro', name: 'TV Mood'},
  ],
  'Pause TV': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/command', payload: 'Pause'},
  ],
  'Resume TV': [
    {type: 'mqtt', topic: 'harmony/harmony-hub/set/command', payload: 'Play'},
  ],
  'TV Break': [
    {type: 'macro', name: 'Pause TV'},
    {type: 'mqtt', topic: 'smartthings/Ceiling Fan Light/switch/set', payload: 'on'},
  ],
  'TV Resume': [
    {type: 'macro', name: 'Resume TV'},
    {type: 'macro', name: 'TV Mood'},
  ],
  'Warm Spa': [
    {type: 'autelis', topic: 'spa', payload: 'on'},
    {type: 'autelis', topic: 'spaHeat', payload: 'on'},
    {type: 'autelis', topic: 'jet', payload: 'off'},
    {type: 'autelis', topic: 'blower', payload: 'off'},
    {type: 'autelis', topic: 'spaLight', payload: 'off'},
  ],
  'Enter Spa': [
    {type: 'autelis', topic: 'jet', payload: 'on'},
    {type: 'autelis', topic: 'blower', payload: 'off'},
    {type: 'autelis', topic: 'spaLight', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Outside Light/switch/set', payload: 'off'},
  ],
  'Exit Spa': [
    {type: 'autelis', topic: 'jet', payload: 'off'},
    {type: 'autelis', topic: 'blower', payload: 'off'},
    {type: 'autelis', topic: 'spaLight', payload: 'on'},
    {type: 'mqtt', topic: 'smartthings/Outside Light/switch/set', payload: 'on'},
  ],
  'Spa Off': [
    {type: 'autelis', topic: 'spa', payload: 'off'},
    {type: 'autelis', topic: 'spaHeat', payload: 'off'},
    {type: 'autelis', topic: 'jet', payload: 'off'},
    {type: 'autelis', topic: 'blower', payload: 'off'},
    {type: 'autelis', topic: 'spaLight', payload: 'off'},
    {type: 'mqtt', topic: 'smartthings/Outside Light/switch/set', payload: 'off'},
  ]
}

