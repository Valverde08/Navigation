
import './gesture-handler';
import { StyleSheet, Text, View,Alert } from 'react-native';
import Routes from './routes/indexRoutes';
import { NavigationContainer } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser';





export default function App() {
  
  return (
    
    <NavigationContainer>
      
          <Routes/>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15,
    paddingHorizontal:25
  },
});
