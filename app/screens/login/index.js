import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import TextInputLayout from '../../components/TextInputLayout';
import LoginButton from '../../components/AppLoginButton';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginButtonStatus, setStatus] = useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleEmail(emailAddress) {
    console.log('email= ', emailAddress);
    emailAddress = emailAddress.trim();
    setEmail(emailAddress);
    setEmailError(' ');

    password === '' ||
    password === undefined ||
    emailAddress === '' ||
    emailAddress === undefined
      ? setStatus(false)
      : setStatus(true);
  }
  function handlePassword(newPassword) {
    newPassword = newPassword.trim();
    setPassword(newPassword);
    newPassword === '' ||
    newPassword === undefined ||
    email === '' ||
    email === undefined
      ? setStatus(false)
      : setStatus(true);
  }

  const handleLogin = () => {
    if (email === '' || password === '') {
      return;
    }
    const result = validateEmail(email);
    if (!result) {
      setEmailError('Invalid Email');
    }
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
          onChangeText={val => handleEmail(val)}
          placeholder={'Your email'}
          maxLength={32}
        />
        <Text style={styles.errorText}>{emailError}</Text>
        <TextInputLayout
          onChangeText={val => handlePassword(val)}
          placeholder={'Your password'}
          maxLength={28}
          secureEntry={true}
          style={{marginTop: 12}}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <LoginButton
        style={styles.loginButton}
        loginText={'Login'}
        onLoginClicked={handleLogin}
        isEnable={loginButtonStatus}
        progress={false}
      />
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
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a3a0a0',
    padding: 8,
    margin: 24,
    marginBottom: 12,
    fontSize: 18,
  },
  errorText: {
    color: '#EB5053',
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: 4,
  },
  text: {
    color: 'black',
    marginStart: 24,
    marginEnd: 24,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    marginHorizontal: 32,
    bottom: 18,
  },
  welcomeText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 42,
  },
  welcomeDescription: {
    top: 6,
    color: 'grey',
    fontWeight: '500',
    fontSize: 18,
  },
});
