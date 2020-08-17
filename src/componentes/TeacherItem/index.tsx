import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem (){
    return (
        <View style={styles.container}>
            <View style= {styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri:'https://avatars0.githubusercontent.com/u/15196571?s=400&u=f571f8fd9a9db407ef2b129eb3fa16d41ef6e357&v=4'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Pierre Enoc</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
               <Text style={styles.bio}>
                Esdutar é uma das melor forma de se tornar uma pessoa melhor.
                {'\n'}{'\n'}
                Apaixão para estudar tecnologia sempre foi o meu melhor desejo.
              </Text> 

              <View style={styles.footer}>
              <Text style={styles.price}>
                  Preços/hora {'   '}
                <Text style={styles.priceValue}>R$ 20,00</Text>                  
            </Text>

             <View style={styles.buttonsContainer}>
                 <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    { /*<Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />           
                 </RectButton>

                 <RectButton style={styles.contactButton}>
                     <Image source={whatsappIcon} />
                     <Text style={styles.contactButtonText}>Entrar em contato</Text>
                 </RectButton>

             </View>

             </View>
        </View>
    )
}

export default TeacherItem;