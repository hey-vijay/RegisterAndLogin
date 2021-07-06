import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import TextInputLayout from '../../components/TextInputLayout';

const Login = props => {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');

  function handleEmail(email) {
    setEmail(email);
  }
  function handleName(name) {
    setName(name);
  }

  const handleLogin = () => {
    Name === '' ? alert('Enter your name first') : alert(Name);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{marginTop: 24, paddingHorizontal: 36}}>
        <Text style={styles.welcomeText}>Welcome to this Club</Text>
        <Text style={styles.welcomeDescription}>
          Please login to continue using this service
        </Text>
      </View>
      <View style={styles.inputBackground}>
        <TextInputLayout
          onChangeText={val => handleName(val)}
          placeholder={'Your email'}
          maxLength={22}
        />
        <TextInputLayout
          onChangeText={val => handleEmail(val)}
          placeholder={'Your password'}
          maxLength={28}
        />
      </View>
      <View style={styles.submitButtonBackground}>
        <Button
          onPress={handleLogin}
          color="black"
          title="LOGIN"
          style={styles.submitButtonBackground}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBackground: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a3a0a0',
    padding: 8,
    margin: 24,
    marginBottom: 12,
    fontSize: 18,
  },
  text: {
    color: 'black',
    marginStart: 24,
    marginEnd: 24,
    marginBottom: 12,
    fontSize: 16,
  },
  submitButtonBackground: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 6,
    marginHorizontal: 32,
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 42,
  },
  welcomeDescription: {
    top: 6,
    color: 'grey',
    fontWeight: '600',
    fontSize: 18,
  },
});
