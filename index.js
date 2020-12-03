process.env.DEBUG = "macros";
process.title = process.env.TITLE || "macro-microservice";

const debug = require("debug")("macros"),
  os = require("os"),
  HostBase = require("microservice-core/HostBase"),
  mqtt = require("mqtt");
//  autelis = require("autelis-microservice/config");

const MQTT_HOST = process.env.MQTT_HOST || "mqtt://robodomo",
  topicRoot = process.env.TOPIC_ROOT || "macros";

// Edit the macros.js file to suit your macro needs/definitions
//const macros = require("./macros");

const runMacro = async (client, topic, macros, name, deviceMap) => {
  const macro = macros[name];
  return new Promise(async (resolve) => {
    for (const key in macro) {
      const step = macro[key],
        type = step.type,
        topic = step.topic,
        payload = step.payload;

      switch (type) {
        case "mqtt":
          debug("macro mqtt", topic, payload);
          if (step.defer) {
            setTimeout(async () => {
              await client.publish(topic, payload);
            }, step.defer);
          } else {
            await client.publish(topic, payload);
          }
          break;
        case "autelis":
          debug("autelis", topic, payload, `${topic}/set/${deviceMap[topic]}`);
          await client.publish(`${topic}/set/${deviceMap[topic]}`, payload);
          setTimeout(() => {
            resolve();
          }, 10);
          break;
        case "macro":
          debug("macro ", step.name);
          await runMacro(client, topic, macros, step.name, deviceMap);
          break;
      }
    }
    resolve();
  });
};

function exit(client, message) {
  try {
    const packet = JSON.stringify({
      type: "alert",
      host: os.hostname(),
      title: "WARNING",
      message: [message],
    });
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("alert", message);
    client.publish("alert", packet, { retain: false });
  } catch (e) {}
  setTimeout(() => {
    process.exit(0);
  }, 3000);
}

async function main() {
  const Config = await HostBase.config(),
    macros = await HostBase.getSetting("macros"),
    autelis = Config.autelis,
    deviceMap = autelis.deviceMap.forward;

  const run_topic = topicRoot + "/run/",
    list_topic = topicRoot + "/list",
    client = mqtt.connect(MQTT_HOST);

  debug("connecting", MQTT_HOST, run_topic);
  client.on("connect", () => {
    const packet = JSON.stringify({
      type: "alert",
      host: os.hostname(),
      title: "WARNING",
      message: [`${process.title} running`],
    });
    client.publish("alert", packet, { retain: false });

    let settingsCount = 2;
    client.subscribe(run_topic + "#");
    client.subscribe("settings/status/config");
    client.subscribe("settings/status/macros");
    client.subscribe("macros/reset/#");

    client.on("message", async (topic, payload) => {
      payload = payload.toString();
      console.log("message", topic, JSON.stringify(payload).substr(0, 40));
      if (payload === "__RESTART__") {
        await exit(client, `${process.title} restarting...`);
        return;
      }
      if (topic.substr(0, 8) === "settings" && --settingsCount === 0) {
        console.log("topic", topic);
        // exit if new settings were stored to mongodb
        process.exit(0);
      }

      if (payload === "list") {
        debug("list", Object.keys(macros));
        await client.publish(list_topic, JSON.stringify(Object.keys(macros)));
      } else {
        //        debug("runMacro", payload);
        //        await runMacro(client, Config, macros, payload, autelis);
        await runMacro(client, topic, macros, payload, deviceMap); // payload is macro name
      }
    });
  });
}

main();
