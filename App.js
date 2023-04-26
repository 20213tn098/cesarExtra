import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import AppNav from './src/AppNav';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppNav/>
    </NavigationContainer>
    <Toast/>
    </>
  );
}

const styles = StyleSheet.create({
  
});
