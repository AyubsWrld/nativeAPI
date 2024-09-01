import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, NativeModules } from 'react-native';

const { Counter } = NativeModules;

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Initialize count from the native module
    if (Counter) {
      const initialCount = Counter.constantsToExport ? Counter.constantsToExport().initialCount : 0;
      setCount(initialCount);
    }
  }, []);

  const increment = () => {
    if (Counter) {
      Counter.increment(value => {
        setCount(value[0]);
      });
    }
  };

  const decrement = () => {
    if (Counter) {
      Counter.decrement()
        .then(result => {
          setCount(result);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase Count" onPress={increment} />
      <Button title="Decrease Count" onPress={decrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});
