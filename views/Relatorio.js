import React from 'react';
import {TouchableWithoutFeedback,TouchableOpacity, Text, View,} from 'react-native';
import {css} from '../assets/css/Css';

export default function Relatorio(props) {
    return(
        <View style={css.container}>
            <Text>Tela de Relatório</Text>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Home')}>
                    <View style={css.button}>
                        <Text>Voltar</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
}