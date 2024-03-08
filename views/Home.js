import React from 'react';
import {Image, Text, View, TouchableOpacity,TouchableWithoutFeedback,SafeAreaView} from 'react-native';
import { css } from '../assets/css/Css';

export default function Home(props) {
    return(
        <SafeAreaView style={css.container}>
            <View>
                <Image style={css.logo} source={require('../assets/img/LogoConfibra.png')}
                />
            </View>

            <View>    
                    <TouchableOpacity onPress={() => props.navigation.navigate('Inventario')} style={css.buttonP}>
                        <View style={css.button_Text}>
                            <Text>Inventário</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Relatorio')} style={css.buttonP}>
                        <View style={css.button_Text}>
                            <Text>Relatorio</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}