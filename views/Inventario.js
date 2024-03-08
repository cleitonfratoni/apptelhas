import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Inventario(props) {
    return(
        <View style={css.container}>
            <Image style={css.logoform} source={require('../assets/img/LogoConfibra.png')}/>
            <View  style={css.container4}>
                <TouchableOpacity onPress={() => props.navigation.navigate('AddTelhas')}>
                        <View style={css.buttonM}>
                            <Text>Add Telhas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Revenda')}>
                        <View style={css.buttonM}>
                            <Text>Add Revenda</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={css.buttonP}>
                        <Text>Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}