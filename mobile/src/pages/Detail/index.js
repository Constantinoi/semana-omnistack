import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View,Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Detail(){

    const navigation = useNavigation();
    const message = 'Ola Apad, estou entrando em contato pois gostaria da cadelia';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
         MailCompose.composeAsync({
             subject: 'Heroi do caso ',
             recipients: ['pescaalma@gmail.com'],
             body:message
         })
    }
    function sendWhatapp(){
        Linking.openURL(`whatsapp://send?phone=55959999999&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={16} color="#e82014"/>
                </TouchableOpacity> 
            </View>
                <View style={styles.incidents}>
                    <Text style={[styles.incidentsProperty, { marginTop: 0}]}>ONG:</Text>
                    <Text style={styles.incidentsValue}>APAD</Text>

                    <Text style={styles.incidentsProperty}>Caso:</Text>
                    <Text style={styles.incidentsValue}>Catioro Loko</Text>

                    <Text style={styles.incidentsProperty}>VALOR:</Text>
                    <Text style={styles.incidentsValue}>R$ 100</Text>
                </View>
                    <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia!</Text>
                        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                        <Text style={styles.heroDescription}>Entre em contato:</Text>
                        <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatapp}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity> 
                        </View>
                    </View>  
        </View>
    )
}