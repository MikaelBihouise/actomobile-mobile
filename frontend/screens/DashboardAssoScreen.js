import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';


function DashboardAssoScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.infotexttitle}>TABLEAU DE BORD</Text>
                <View style={styles.line}></View>
                <Text style={styles.infotext}>Vos projets en cours</Text>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/projet1.jpg')}
                />
                <Text style={styles.projecttext}>Campagne pour sauver les baleines</Text>
                <Text style={styles.projecttextsmall}>BlueWhale souhaite lancer une campagne digitale globale pendant l'été pour éveiller les consciences sur la situation des Baleines, plus que préoccupantes selon 350 scientifiques et défenseurs de la cause animale issus d’une quarantaine de pays. </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    scroll: {
        justifyContent : 'center',
        alignItems: 'center',
    },
    infotexttitle: {
        marginTop: 45,
        fontSize: 45,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
    },
    infotext: {
        fontSize: 30,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular',
        padding: 25,
        textAlign:'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
    },
    projecttext: {
        marginTop: 15,
        fontSize: 24,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
    },
    projecttextsmall: {
        fontSize: 16,
        color: '#262626',
        fontFamily: 'Roboto-Regular',
        padding: 25,
        textAlign:'center'
    },
    line: {
        width: 160,
        height: 1,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#803BCA',
    }
});

export default DashboardAssoScreen;