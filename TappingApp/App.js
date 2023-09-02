import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'; //import modal here

const App = () => {
  const [count, setCount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
  const [textColor, setTextColor] = useState('#333');

  const tapCount = () => { //tap count is declared defined here
    setCount(count + 1);
  };

  const toggleModal = () => { //modal toggle
    setModalVisible(!isModalVisible);
  };

  const options = (background, text) => { // backgroundf options
    setBackgroundColor(background);
    setTextColor(text);
    toggleModal();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* background circle to make app look less empty here */}
      <View style={styles.backgroundCircle}></View>

      <Text style={[styles.title, { color: textColor }]}>Tapper App</Text>
      <Text style={[styles.subtitle, { color: textColor }]}>
        Welcome to the "Tapper" app where you can click as many times as you want!
      </Text>
      <Text style={[styles.counter, { color: textColor }]}>Count: {count}</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={tapCount}>
        <View style={styles.buttonBox}>
          <Text style={styles.buttonText}>Tap Me!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoButton} onPress={toggleModal}> 
        <Text style={styles.infoButtonText}>Options</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}> {/* options all defined down here */}
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Options</Text>
          <Button
            title="Set Background to Blue"
            onPress={() => options('lightblue', textColor)}
          />
          <Button
            title="Set Background to Green"
            onPress={() => options('lightgreen', textColor)}
          />
          <Button
            title="Set Text to Red"
            onPress={() => options(backgroundColor, 'red')}
          />
          <Button
            title="Reset Tap Count"
            onPress={() => {
              setCount(0);
              toggleModal();
            }}
          />
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({ //all colours borders sizes etc all defined below this point
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundCircle: {
    position: 'absolute',
    top: -150,
    right: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'lightgray', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#777',
  },
  counter: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  buttonBox: {
    borderWidth: 10,
    borderColor: 'black', 
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  infoButtonText: {
    color: '#007AFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
