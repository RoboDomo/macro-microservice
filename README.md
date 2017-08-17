# macro-microservice
RoboDomo microservice to run macros

## Overview

A macro is roughly equivalent to a scene in Home Automation terms.

It is ideal to be able to control a number of devices based upon some trigger, rather than having to 
manually turn each device on or off.

A macro named "All Off" might turn absolutely everything off in the home.

A macro named "TV Mood" might turn on the TV, turn off the lights, turn on the ceiling fan, set the 
A/C to 75, etc.

Macros are ideally suited for the swimming pool controls.  The "Turn On Spa" macro might turn on the spa, the heater, 
set the heat to 100F, the jets, and the light.  Similarly, the "Turn Off Spa" macro would turn all that off.

A trigger can be an on screen control or some sort of event.  You might have a toggle button on screen that turns 
the spa on (run Spa On macro), and when that's on, the button would turn the spa off (run Spa Off Macro) if
touched again.  Or we might want the Spa Off macro to run at midnight, just in case we forgot to turn off the
Spa when we got out earlier.

Note that triggers are not a feature of this microservice.  Handling the render and button press events for a
toggle is the responsibility of a web application.  Triggering based upon time or some other event is 
suitable for a cron job (or some other schedule), or business logic that might trigger on a physical button press
or change of a wall switch state.  See the rules repository for examples.

Macros can include other macros.  The "All Off" macro might invoke the "Kitchen Off" and "Bedroom Off" macros.
This allows those macros to be reused, or used in multiple applications.

Macros otherwise are simply an array of MQTT messages that we want to send in sequence (Turn off the Ceiling Fan 
and Turn off the Ceiling Fan Light).

## Example
Macro name: Bedroom On

Synopsis: turn on TV, bedroom light, bedroom ceiling fan, and bathroom lights.

```javascript
        'Bedroom On': [
            {type: 'mqtt', topic: 'harmony/harmony-hub2/set/activity', payload: 'Watch TV'},
            {type: 'mqtt', topic: 'smartthings/Bedroom Light/switch/set', payload: 'on'},
            {type: 'mqtt', topic: 'smartthings/Bedroom Fan/switch/set', payload: 'on'},
            {type: 'macro', name: 'Bathroom On'},
        ],
```

## How to use this

Back up the macros.js file and edit it to suit your needs.

If you are using the docker version, you will want to keep the
macros.js file somewhere in your host file system and use the -v
switch to map it into the container's filesystem.


```
$ docker run \
    -d \
    -v /path/to/macros.js:/home/app/macros.js \
    --rm \
    --name="macro-microservice"
    macro-microservice
```

THen you can edit the macros.js file on the host and restart
the container as you need:

```
$ docker restart macro-microservice
```
