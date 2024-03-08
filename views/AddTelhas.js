import React, {useState} from 'react';
import {TouchableOpacity,
    Text,
    View,
    SafeAreaView, 
    KeyboardAvoidingView,
    TextInput,
    Image,
    Platform,
    ScrollView,
    Alert} from 'react-native';
import { Input } from 'react-native-elements';
import CheckBox, {option} from '../assets/components/CheckBox';
import DropdownList from '../assets/components/DropdownList';
import {css} from '../assets/css/Css';

const AddTelhas = (props) => {
    const optiontelha = [
        {text: 'CF', id:'CRFP'},
        {text: 'ET', id:'ETFC'}
    ];
    const statustelha = [
        {text: 'Estoque', id:'Estoque'},
        {text: 'CQ', id:'CQ'},
        {text: 'Capa', id:'Capa'}
    ];
    const [marca, setMarca]=useState(null);
    const [tamanho, setTamanho]=useState(null);
    const [status, setStatus]=useState(null);
    const [local, setLocal]=useState(null);
    const [qtede, setQtede]=useState(null);
    const telha=marca+tamanho;

    const IDs = (idProduct)=>{
        if (telha === 'CRFP05092244'){
            idProduct = (1)
        }
    }

    //Envido das telhas
    async function sendInputProd(){
        let response=await fetch('http://10.198.34.119:3000/AddTelha', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                produtoID: telha,
                status: status,
                local: local,
                qtde: qtede
            })
        });
        let json=await response.json();
        if(json === 'error'){
            Alert.alert('Telha não encontrada!')
        }else{
            Alert.alert('Telha adicionada com sucesso!')
        }
    }

    return(
        <SafeAreaView style={css.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "android" ? "padding" : "height"}>
                <View style={css.container4}>
                    <Image style={css.logoform} source={require('../assets/img/LogoConfibra.png')}/>
                </View>
                <View>
                    <Text style={css.title}>Marca e tamanho da telha:</Text>
                </View>
                <View style={css.container4}>
                    <CheckBox options={optiontelha} onChange={op=> setMarca(op)}/>
                    <TextInput 
                    style={css.telhainput} 
                    placeholder='Tamalho da Telha' 
                    onChangeText={text=>setTamanho(text)}
                    keyboardType="number-pad" 
                    />
                </View>
                <View>
                    <Text style={css.title}>Status da Telha, Local e Quantidade: </Text>
                </View>
                <View style={css.container4}>
                    <CheckBox options={statustelha} onChange={op=> setStatus(op)}/>
                    <TextInput 
                    style={css.qtdinput} 
                    placeholder='Quantidade' 
                    onChangeText={text=>setQtede(text)}
                    keyboardType="number-pad" 
                    />
                    <DropdownList style={css.localinput} onChange={text=> setLocal(text)} />
                </View>
                <View style={css.container5}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Inventario')}>
                        <View style={css.buttonP}>
                            <Text>Voltar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sendInputProd()}>
                        <View style={css.buttonP}>
                            <Text>Add Telha</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddTelhas;
    