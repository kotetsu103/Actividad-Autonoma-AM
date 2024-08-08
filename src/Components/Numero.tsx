import React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import { styles } from '../theme/apptheme';

interface Numero {
    valor: string; 
    onChangeTextHandler: (text: string) => void; 
}

export const Numero: React.FC<Numero> = ({ valor, onChangeTextHandler }) => (
  <View style={styles.container3}>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={valor}
      onChangeText={onChangeTextHandler}
    />
  </View>
);

