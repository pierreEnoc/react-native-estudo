import React from 'react';

import { View, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';


function Favorites () {

    return (
        <View style={styles.container}> 
        <View style={styles.container}> 
        <PageHeader title="Meus proffys favoritos" />

        <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
        }}

    >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        </ScrollView>
    
      </View>
     </View>
    )
}

export default Favorites;