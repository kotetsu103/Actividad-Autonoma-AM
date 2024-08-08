import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { styles } from '../theme/apptheme';
import { StackScreenProps } from '@react-navigation/stack';
import { ButtonComponent } from '../Components/ButtonComponents';

interface Props extends StackScreenProps<any, any>{};

export const inicio = ({navigation}: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bienvenido</Text>
    <Image
      source={{ uri: 'https://www.codedonostia.com/wp-content/uploads/2020/01/aplicaciones_movil.png' }}
      style={styles.image}
    />
    <ButtonComponent textButton="Acceder" onPress={() => navigation.navigate('Formurario')} />
  </View>
);
