import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from 'react-native';

import styles from './styles';

const Welcome = props => {
  return (
    <SafeAreaView style={styles.mainConainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images.webp')}
        />
        <Text style={styles.welcomText}>Welcome to our Club</Text>
      </View>
      <Pressable
        onPress={() => console.log('Logging you in...')}
        style={{width: '100%'}}>
        <View style={styles.loginButtonBackground}>
          <Text style={styles.button}>Login</Text>
        </View>
      </Pressable>
      <View style={styles.signUpButtonBackground}>
        <Text style={styles.button}>Sign UP</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
