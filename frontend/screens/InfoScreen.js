import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';


function InfoScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.infotexttitle}>Actomobile c'est quoi ?</Text>
                <Text style={styles.infotext}>Actomobile est une banque de compétences et de projets tournée vers la philanthropie où le concept n’est pas d’échanger ses compétences pour du profit mais pour du bien-être. Simplement permettre à chacun de pouvoir s’épanouir dans ses convictions et d’aider le monde de manière plus concrête.</Text>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/img1.jpg')}
                />
                <Text style={styles.infotext}>Nous nous sentons tous de plus en plus concernés par la situation actuelle du monde tout en ressentant un grand sentiment d’impuissance . Il y a beaucoup de moyens pour participer à des actions par le biais de dons financiers et/ou en signant des pétitions mais il est difficile d’apporter une aide concrête aux sujets qui nous tiennent à coeur. 
                Parallèlement, beaucoup de projets avec un potentiel humanitaire immense ne voient jamais le jour à cause d’un manque de moyens et de certaines compétences. D’autres projets démarrent mais sont ralentis plus tard par ces même défis.
                </Text>
                <Text style={styles.infotexttitle}>Les actualités</Text>
                <Text style={styles.card}><Image 
                    style={styles.imagesmall}
                    source={require('../assets/images/img1.jpg')}
                /></Text>
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
        fontSize: 35,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
    },
    infotext: {
        fontSize: 16,
        color: '#262626',
        fontFamily: 'Roboto-Regular',
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
    imagesmall: {
        width: 150,
        height: 150,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
    },
    card: {
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5,
        width: 300,
        height: 300,
    }
});


export default InfoScreen;