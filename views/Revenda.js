import React from 'react';
import {TouchableWithoutFeedback, Text, View,} from 'react-native';
import {css} from '../assets/css/Css';

export default function Revenda(props) {
    return(
        <View style={css.container}>
            <Text>Tela de Inventario</Text>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Inventario')}>
                    <View style={css.button}>
                        <Text>Voltar</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
}