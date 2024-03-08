import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet, TouchableOpacity, TouchableHighlightBase} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { css } from "../css/Css";

const CheckBox = ({options = [], onChange, multiple = false, prop}) =>{
    const [selected, setSelected] = useState ([]);
    function toggle(id){
        let index = selected.findIndex((i)=> i === id);
        let arrSelecteds = [...selected];
        if(index !== -1){
            arrSelecteds.splice(index,1);
        }else{
            multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
        }
        setSelected(arrSelecteds);        
    }

    useEffect(() => onChange(selected), [selected]);
    return (
    <View style={css.container3}>
        {options.map((op,index) => (
            <View style={css.optionContainer}>
                <TouchableOpacity 
                    style={[css.touchable,{
                        backgroundColor:selected.findIndex(i=> i === op.id) !== -1 
                        ? '#3EBD93' 
                        : '#fff',
                    }]} 
                    onPress={()=> toggle(op?.id)}>
                    {selected.findIndex(i=> i === op.id) !== -1 ? ( 
                        <Entypo name="check" size={16} color="#fff" />
                    ) : null}
                </TouchableOpacity>
                <Text style={css.optext}>{op?.text}</Text>
            </View>
        ))}
    </View>
    );
}

export default CheckBox;