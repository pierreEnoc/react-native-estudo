import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import giveClassesBgImage1 from '../../assets/images/give-classes-background.png';
import givClassIcon from '../../assets/images/icons/give-classes.png';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const  {goBack} = useNavigation ();

    function handlerNavigationGoback() {
        goBack();
    }

    return( 
     <View style={styles.container} >
         <ImageBackground 
             resizeMode ="contain" 
             source ={giveClassesBgImage} 
             style={styles.content} 
            >
         <Text style= {styles.title}> Quer ser um Proffy? </Text>
         <Text style= {styles.description}> 
             Para começar, vocẽ precisa se cadastrar como professor na nossa plataforma web.

         </Text>
         </ImageBackground>

         <RectButton onPress={handlerNavigationGoback} style={styles.okButton}>
             <Text style= {styles.okButtonText}> Tudo bem</Text>

         </RectButton>
    </View>
  );

}

export default GiveClasses;