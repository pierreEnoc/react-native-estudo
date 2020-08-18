import React, { useState, useEffect } from 'react';

import { View, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';



function Favorites () {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
            
              setFavorites(favoritedTeachers);  
            } 
         });
    }

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <View style={styles.container}> 
        <PageHeader title="Meus proffys favoritos" />

        <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
        }}
    > 

     {favorites.map((teacher: Teacher) => {
         return (
             <TeacherItem 
             key={teacher.id}
             teacher={teacher}
             favorited={true}
             />
         )
     })}
        </ScrollView>
    
     </View>
    )
}

export default Favorites;