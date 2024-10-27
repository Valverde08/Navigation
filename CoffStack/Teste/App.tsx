import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Src/Routes/Routes';
import { AuthProvider } from './Src/Context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
