module.exports = {
  "Theater On": [
    {
      type: "mqtt",
      topic: "harmony/harmony-hub/set/activity",
      payload: "Watch TV"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "on"
    }
  ],
  "Theater Off": [
    {
      type: "mqtt",
      topic: "harmony/harmony-hub/set/activity",
      payload: "PowerOff"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "off"
    }
  ],
  "Kitchen On": [
    {
      type: "mqtt",
      topic: "smartthings/Kitchen Lights/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Kitchen Sink Light/switch/set",
      payload: "on"
    }
  ],
  "Kitchen Off": [
    {
      type: "mqtt",
      topic: "smartthings/Kitchen Lights/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Kitchen Sink Light/switch/set",
      payload: "off"
    }
  ],
  "Outside On": [
    {
      type: "mqtt",
      topic: "smartthings/Porch Light/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Outside Lights/switch/set",
      payload: "on"
    }
  ],
  "Outside Off": [
    {
      type: "mqtt",
      topic: "smartthings/Porch Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Outside Lights/switch/set",
      payload: "off"
    }
  ],
  "Office TV On": [
    { type: "mqtt", topic: "bravia/sony-810c/set/command", payload: "WakeUp" }
  ],
  "Office TV Off": [
    { type: "mqtt", topic: "bravia/sony-810c/set/command", payload: "PowerOff" }
  ],
  "Office On": [
    { type: "macro", name: "Office TV On" },
    {
      type: "mqtt",
      topic: "smartthings/Office Dimmer/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Office Light/switch/set",
      payload: "on"
    },
    { type: "mqtt", topic: "smartthings/Office Fan/switch/set", payload: "on" }
  ],
  "Office Off": [
    { type: "macro", name: "Office TV Off" },
    {
      type: "mqtt",
      topic: "smartthings/Office Dimmer/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Office Light/switch/set",
      payload: "off"
    },
    { type: "mqtt", topic: "smartthings/Office Fan/switch/set", payload: "off" }
  ],
  "Back Room On": [
    {
      type: "mqtt",
      topic: "smartthings/Back Room Light/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Back Room Fan/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Back Room Switch/switch/set",
      payload: "on"
    }
  ],
  "Back Room Off": [
    {
      type: "mqtt",
      topic: "smartthings/Back Room Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Back Room Fan/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Back Room Switch/switch/set",
      payload: "off"
    }
  ],
  "Bathroom On": [
    {
      type: "mqtt",
      topic: "smartthings/Bathroom Light/switch/set",
      payload: "on"
    }
  ],
  "Bathroom Off": [
    {
      type: "mqtt",
      topic: "smartthings/Bathroom Light/switch/set",
      payload: "off"
    }
  ],
  "Bedroom On": [
    { type: "mqtt", topic: "bravia/sony-850c/set/command", payload: "WakeUp" },
    { type: "mqtt", topic: "tivo/tivo-bolt/set/", payload: "LIVETV" },
    { type: "mqtt", topic: "denon/denon-x2100w/set/command", payload: "PWON" },
    { type: "mqtt", topic: "denon/denon-x2100w/set/command", payload: "Z2OFF" },
    //    {type: 'mqtt', topic: 'smartthings/Bedroom Light/switch/set', payload: 'on'},
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Lamp/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Fan/switch/set",
      payload: "on"
    },
    { type: "macro", name: "Bathroom On" }
  ],
  "Bedroom Off": [
    {
      type: "mqtt",
      topic: "bravia/sony-850c/set/command",
      payload: "PowerOff"
    },
    {
      type: "mqtt",
      topic: "denon/denon-x2100w/set/command",
      payload: "PWSTANDBY"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Lamp/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Fan/switch/set",
      payload: "off"
    },
    { type: "macro", name: "Bathroom Off" }
  ],
  "All Off": [
    { type: "macro", name: "Spa Off" },
    { type: "macro", name: "Theater Off" },
    { type: "macro", name: "Kitchen Off" },
    { type: "macro", name: "Outside Off" },
    { type: "macro", name: "Office Off" },
    { type: "macro", name: "Bedroom Off" },
    {
      type: "mqtt",
      topic: "smartthings/Entryway Lights/switch/set",
      payload: "off"
    }
  ],
  Bedtime: [
    {
      type: "mqtt",
      topic: "harmony/harmony-hub/set/activity",
      payload: "PowerOff"
    },
    {
      type: "mqtt",
      topic: "harmony/harmony-hub/set/activity",
      payload: "PowerOff"
    },
    {
      type: "mqtt",
      topic: "harmony/harmony-hub2/set/activity",
      payload: "PowerOff"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "on"
    },
    { type: "macro", name: "Kitchen On" },
    { type: "macro", name: "Outside Off" },
    { type: "macro", name: "Office Off" },
    { type: "macro", name: "Back Room Off" },
    { type: "macro", name: "Bedroom On" },
    {
      type: "mqtt",
      topic: "nest/Falsetto/Hallway Thermostat/set/target_temperature_f",
      payload: "72"
    }
  ],
  "Good Night": [
    { type: "macro", name: "Spa Off" },
    { type: "macro", name: "Theater Off" },
    { type: "macro", name: "Kitchen Off" },
    { type: "macro", name: "Outside Off" },
    { type: "macro", name: "Office Off" },
    { type: "macro", name: "Back Room Off" },
    { type: "macro", name: "Bathroom Off" },
    {
      type: "mqtt",
      topic: "smartthings/Porch Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Outside Lights/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Entryway Lights/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Lamp/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Bedroom Fan/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "nest/Falsetto/Hallway Thermostat/set/target_temperature_f",
      payload: "72"
    }
  ],
  "Good Morning": [
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Office Dimmer/switch/set",
      payload: "on"
    },
    {
      type: "mqtt",
      topic: "nest/Falsetto/Hallway Thermostat/set/target_temperature_f",
      payload: "79"
    }
  ],
  "TV Mood": [
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan/switch/set",
      payload: "on"
    },
    { type: "mqtt", topic: "smartthings/Ceiling Fan/level/set", payload: "50" },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "off"
    },
    {
      type: "mqtt",
      topic: "smartthings/Kitchen Lights/switch/set",
      payload: "off"
    }
  ],
  "Watch TV": [
    {
      type: "mqtt",
      topic: "harmony/harmony-hub/set/activity",
      payload: "Watch TV"
    },
    { type: "macro", name: "TV Mood" }
  ],
  "Pause TV": [
    { type: "mqtt", topic: "harmony/harmony-hub/set/command", payload: "Pause" }
  ],
  "Resume TV": [
    { type: "mqtt", topic: "harmony/harmony-hub/set/command", payload: "Play" }
  ],
  "TV Break": [
    { type: "macro", name: "Pause TV" },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "on"
    }
  ],
  "TV Resume": [
    { type: "macro", name: "Resume TV" },
    {
      type: "mqtt",
      topic: "smartthings/Ceiling Fan Light/switch/set",
      payload: "off"
    }
  ],
  "Warm Spa": [
    { type: "autelis", topic: "spa", payload: "on" },
    { type: "autelis", topic: "pump", payload: "on" },
    { type: "autelis", topic: "spaHeat", payload: "on" },
    { type: "autelis", topic: "jet", payload: "off" },
    { type: "autelis", topic: "blower", payload: "off" },
    { type: "autelis", topic: "spaLight", payload: "off" }
  ],
  "Enter Spa": [
    { type: "autelis", topic: "jet", payload: "on" },
    { type: "autelis", topic: "blower", payload: "off" },
    { type: "autelis", topic: "spaLight", payload: "on" },
    {
      type: "mqtt",
      topic: "smartthings/Outside Light/switch/set",
      payload: "off"
    }
  ],
  "Exit Spa": [
    { type: "autelis", topic: "jet", payload: "off" },
    { type: "autelis", topic: "blower", payload: "off" },
    { type: "autelis", topic: "spaLight", payload: "on" },
    {
      type: "mqtt",
      topic: "smartthings/Outside Light/switch/set",
      payload: "on"
    }
  ],
  "Spa Off": [
    { type: "autelis", topic: "spa", payload: "off" },
    { type: "autelis", topic: "spaHeat", payload: "off" },
    { type: "autelis", topic: "jet", payload: "off" },
    { type: "autelis", topic: "blower", payload: "off" },
    { type: "autelis", topic: "spaLight", payload: "off" },
    { type: "autelis", topic: "poolLight", payload: "off" },
    { type: "autelis", topic: "solarHeat", payload: "off" },
    { type: "autelis", topic: "pump", payload: "off" },
    { type: "autelis", topic: "cleaner", payload: "off" },
    {
      type: "mqtt",
      topic: "smartthings/Outside Light/switch/set",
      payload: "off"
    }
  ]
};
