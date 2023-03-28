import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function index(props) {
  const {children, registre, ...rest} = props;
  return (
    <View
      style={[
        {backgroundColor: '#EF8119'},
        styles.container,
      ]}
      activeOpacity={.7}>
      {children}
    </View>
  );
}