import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    watsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handlerLinkToWatspp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.watsapp}`)
    }

    async  function handlerToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }
    
        if(isFavorited){
            //remove dos favorites
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);
        }else {
            //add aos vaforites
             favoritesArray.push(teacher);

            setIsFavorited(true);
           
        }

        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style= {styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: teacher.avatar}}
                />

                <View style={styles.profileInfo}>
                  <Text style={styles.name}>{teacher.name}</Text>
                  <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

             <Text style={styles.bio}>{teacher.bio}</Text> 

              <View style={styles.footer}>
              <Text style={styles.price}>
                  Preços/hora {'   '}
                <Text style={styles.priceValue}>R${teacher.cost}</Text>                  
            </Text>

             <View style={styles.buttonsContainer}>
                <RectButton 
                 onPress ={handlerToggleFavorite}
                 style={[
                      styles.favoriteButton, 
                      isFavorited ? styles.favorited : {},
                     ]}
                >
            
                     { isFavorited 
                       ?  <Image source={unfavoriteIcon} /> 
                       :  <Image source={heartOutlineIcon} /> 
                    }

                 </RectButton>

                 <RectButton onPress={handlerLinkToWatspp} style={styles.contactButton}>
                     <Image source={whatsappIcon} />
                     <Text style={styles.contactButtonText}>Entrar em contato</Text>
                 </RectButton>

             </View>

             </View>
        </View>
    )
}

export default TeacherItem;