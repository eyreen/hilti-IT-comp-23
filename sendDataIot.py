import paho.mqtt.client as mqtt
import json

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("construction_site/equipment/#")

def on_message(client, userdata, msg):
    data = json.loads(msg.payload)
    print("Received data:", data)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("<aws-iot-endpoint>", 8883, 60)

data = {
  "name": "Excavator",
  "status": "active",
  "temperature": 25
}

client.publish("construction_site/equipment/excavator", json.dumps(data))

client.loop_forever()
