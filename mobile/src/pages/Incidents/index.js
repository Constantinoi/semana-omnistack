import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity , FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){

    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.description}>
                    Escolha um dos cados abaixo e salve o dia.
                </Text>
                
                
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                style={styles.incidentsList}
                showsVerticalScrollIndicator = {false}
                renderItem={() =>(
                    <View  style={styles.incidents}>
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>APAD</Text>

                        <Text style={styles.incidentsProperty}>Caso:</Text>
                        <Text style={styles.incidentsValue}>Catioro Loko</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentsValue}>R$ 100</Text>
                        
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToDetail}>
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