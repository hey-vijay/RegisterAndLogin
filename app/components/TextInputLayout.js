import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
/*
    @props:
        placeholder:
*/
const TextInputLayout = props => {
  const [isFocused, setFocused] = useState(false);
  console.log(props);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={val => props.onChangeText(val)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        style={[
          styles.input,
          {borderColor: isFocused ? 'dodgerblue' : '#C7C1C1'},
        ]}
      />
    </View>
  );
};

export default TextInputLayout;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#C7C1C1',
    borderRadius: 6,
    padding: 10,
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});
