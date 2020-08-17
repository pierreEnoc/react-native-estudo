import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import landingImg from '../../assets/images/landing.png';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import studyIcon from '../../assets/images/icons/study.png';
import givClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';


function Landing() {
    const { navigate }  = useNavigation();


    const [totalConnections, setTotalConnections] = useState (0);

    useEffect(() => {

        api.get('connections').then(response => {
            console.log(response);
            const  total  = response.data.total;

            setTotalConnections(total);
        })

     }, []);

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses');
    }
    
    function handlerNavigateToStudyPages() {
        navigate('Study');
    }

    return (
    <View style={styles.container}>
        <Image source = {landingImg} style={ styles.banner} /> 

        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style= {styles.titleBold}>O que deseja fazer?</Text>
        </Text>  

        <View style= {styles.buttonsContainer}>
            <RectButton 
            onPress ={handlerNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]}
            >
             <Image source={studyIcon}/>

             <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton 
                onPress ={handleNavigationToGiveClassesPage} 
                style={[styles.button, styles.buttonSecondary]}
                >
                <Image source={studyIcon}/>

                <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>
        </View>
        <Text style= {styles.totalConnections}>
        Total de {totalConnections} connexões já realizadas {' '}
            <Image source={heartIcon} />
        </Text>
    </View >
   );
}

export default Landing;