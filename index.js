process.env.DEBUG='macros'

const debug   = require('debug')('macros'),
      mqtt    = require('mqtt'),
      autelis = require('autelis-microservice/config')

const MQTT_HOST = process.env.MQTT_HOST || 'mqtt://ha',
      topicRoot = process.env.TOPIC_ROOT || 'macros'

// Edit the macros.js file to suit your macro needs/definitions
const macros = require('./macros')

function runMacro(client, name) {
  const macro = macros[name],
        deviceMap = autelis.autelis.controllers[0].deviceMap

  for (const key in macro) {
    const step    = macro[key],
          type    = step.type,
          topic   = step.topic,
          payload = step.payload

    switch (type) {
      case 'mqtt':
        debug('macro mqtt', topic, payload)
        client.publish(topic, payload)
        break
      case 'autelis':
        debug('autelis', topic, payload, `${autelis.mqtt.topic}/set/${deviceMap.forward[topic]}`)
        client.publish(`${autelis.mqtt.topic}/set/${deviceMap.forward[topic]}`, payload)
        break
      case 'macro':
        runMacro(client, step.name)
        break
    }
  }
}

async function main() {
  const run_topic = topicRoot + '/run/',
        list_topic = topicRoot + '/list',
        client    = mqtt.connect(MQTT_HOST)

  debug('connecting', MQTT_HOST, run_topic)
  client.on('connect', () => {
    debug('mqtt connected')

    client.subscribe(run_topic + '#')

    client.on('message', (topic, payload) => {
      payload = payload.toString()

      if (payload === 'list') {
        debug('list', Object.keys(macros))
        client.publish(list_topic, JSON.stringify(Object.keys(macros)))
      }
      else {
        debug('runMacro', payload)
        runMacro(client, payload)
      }
    })
  })
}

main()

