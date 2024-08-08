import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Numero } from '../Components/Numero';
import { styles } from '../theme/apptheme';
import { StackScreenProps } from '@react-navigation/stack';
import { ButtonComponent } from '../Components/ButtonComponents';

interface Props extends StackScreenProps<any, any>{}; 

export const formulario = ({navigation}: Props) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const divideNumbers = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (n2 === 0) {
      setResult(num1 === '0' ? 'INDETERMINACIÓN' : 'NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((n1 / n2).toFixed(2).toString());
    }
  };

  return (
    <View style={styles.container2}>
      <Numero valor={num1} onChangeTextHandler={setNum1} />
      <Numero valor={num2} onChangeTextHandler={setNum2} />
      <ButtonComponent textButton='Dividir' onPress={divideNumbers}/>
      <Text style={styles.result}>{result}</Text>
      <ButtonComponent textButton="Regresar" onPress={()=>navigation.navigate('Inicio')} /> 
    </View>
  );
};

