import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { css } from "../css/Css";
import { SelectList } from 'react-native-dropdown-select-list';

const DropdownList = ({onChange}) => {
    const [selected, setSelected] = React. useState("");

    const data = [
        {key:'Balança', value:'Balança'},
        {key:'Carregamento', value:'Carregamento'},
        {key:'MÁQ1', value:'MÁQ1'},
        {key:'MÁQ2', value:'MÁQ2'},
        {key:'P1', value:'P1'},
        {key:'P2', value:'P2'},
        {key:'P3', value:'P3'},
        {key:'P4', value:'P4'},
        {key:'P5', value:'P5'},
        {key:'P6', value:'P6'},
        {key:'Qualidade', value:'Qualidade'},
        {key:'Serra', value:'Serra'},
        {key:'Moldagem', value:'Moldagem'},
        {key:'Strech', value:'Strech'},
        {key:'Fundão', value:'Fundão'},
    ];
    useEffect(()=> onChange(selected), [selected]);
    return (
        <View>
            <SelectList 
                data={data} 
                setSelected={setSelected}
                boxStyles={{
                    marginLeft: -120,
                    backgroundColor: '#D9D9D9',
                    fontSize: 12,
                    width: 120,
                    height: 45,
                    borderColor:'#D9D9D9',
                    borderRadius: 5,
                    padding: 12
                }}
                placeholder="Local"
            />
        </View>
    )
}

export default DropdownList;