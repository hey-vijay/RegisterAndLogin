import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Welcome from '../app/screens/welcomeScreen/index';
import Login from './screens/login/index';
import EmployeeList from './screens/dashboard/index';
import Card from './components/EmployeeCard';
import AppButton from '../app/components/AppButton';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  console.log(Welcome);
  return (
    <SafeAreaView style={styles.background}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
