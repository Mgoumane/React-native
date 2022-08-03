import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titleText} >
          hello world
        </Text>
        <Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ width: 40, height: 40 , margin: 80, }}
        />
        
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000FF',
  },
  container2: {
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    margin: 80,
  },
});
