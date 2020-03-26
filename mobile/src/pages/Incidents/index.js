import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity , FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState([]);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }
    async function loadIncidents(){
        const response = await api.get('incidents');

        setIncidents(response.data);
        setTotal(response.headers['x-total-count']); 
    }
    useEffect(() => {
       loadIncidents(); 
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.description}>
                    Escolha um dos cados abaixo e salve o dia.
                </Text>
                
                
            <FlatList
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                style={styles.incidentsList}
                showsVerticalScrollIndicator = {false}
                renderItem={({ item: incident }) =>(
                    <View  style={styles.incidents}>
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>{incident.name}</Text>

                        <Text style={styles.incidentsProperty}>Caso:</Text>
                        <Text style={styles.incidentsValue}>{incident.titulo}</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentsValue}>
                            {Intl.NumberFormat('pt-BR', 
                            {style: 'currency', 
                            currency:'BRL'
                            }).format(incident.value)}</Text>
                        
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={()=> navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>
                            Ver mais detalhes    
                            </Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>      
                        </TouchableOpacity>
                    </View>
                )}
            />
    
        </View>
    );
}