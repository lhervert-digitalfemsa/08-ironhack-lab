import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./Battery.styles";

import { BatteryModuleType } from '../../typings/BatteryModule.type';

import { NativeEventEmitter, NativeModules } from "react-native";
const { BatteryModule, EventEmitterModule } = NativeModules;

const eventEmitter = new NativeEventEmitter(EventEmitterModule);
const batteryEventEmitter = new NativeEventEmitter(BatteryModule);

const Battery = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [warning, setWarning] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const warningThreshold = 20;

  useEffect(() => {
    (BatteryModule as BatteryModuleType)
      .getBatteryLevelAsync()
      .then(level => {
        if (level < 0) {
          return;
        }
        setWarning(level <= warningThreshold);

        setBatteryLevel(level);
      })
      .catch(err => setError(err.toString()));
  }, [warningThreshold]);

  useEffect(() => {
    const eventListener = eventEmitter.addListener('onCustomEvent', event => {
      console.log(event.message);
    });

    EventEmitterModule.sendEventToJavaScript();

    return () => {
      eventListener.remove();
    };
  }, []);

  // Listen the battery level event
  useEffect(() => {
    const eventListener = batteryEventEmitter.addListener(
      'batteryLevelChanged',
      value => {
        /* The value in iOS simulator is -100. We log it to see if the event is triggered correctly
        from the native module.*/
        console.log('value:', value);
        if (value < 0) {
          return;
        }
        setWarning(value <= warningThreshold);
        setBatteryLevel(value);
      },
    );

    return () => {
      eventListener.remove();
    };
  }, [warningThreshold]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.battery}>
          <Text style={styles.text}>{batteryLevel}%</Text>
        </View>
        <View style={styles.batteryHeader} />
      </View>
      <View>
        {warning && (
          <Text >
            Warning: Battery level is low ({batteryLevel}%)
          </Text>
        )}
        {error && <Text >{error}</Text>}
      </View>
    </>
  );
}

export default Battery;