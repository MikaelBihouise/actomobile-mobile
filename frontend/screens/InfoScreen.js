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
                <View style={styles.card}>
                    <Image 
                        style={styles.imagesmall}
                        source={require('../assets/images/actu1.jpg')}
                    />
                    <Text style={styles.actutitle}>
                    Environnement
                    </Text>
                    <Text style={{textAlign:'center', fontSize: 15}}>
                    Le niveau de la mer monte dangereusement sur tous les littoraux du monde: L'élévation du niveau de la mer due au réchauffement climatique s'annonce catastrophique pour un certain nombre de populations côtières. Plus encore qu'on le pensait, avertissent aujourd'hui des chercheurs...
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image 
                        style={styles.imagesmall}
                        source={require('../assets/images/actu2.jpg')}
                    />
                                        <Text style={styles.actutitle}>
                    Pauvreté
                    </Text>
                    <Text style={{textAlign:'center', fontSize: 15}}>
                    Donner aux pays les plus pauvres les moyens d'une reprise résiliente. Shukria a 24 ans. Dans sa ville natale de Nakrabad, à 500 kilomètres au nord-ouest de Kaboul, elle coud des masques pour sauver des vies. La centaine de masques qu'elle fabrique chaque jour contribue à pallier la pénurie de cet équipement aussi simple qu'essentiel pour protéger les 1 700 habitants de sa commune...
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.actutitle}>
                    Solidarité
                    </Text>
                    <Image 
                        style={styles.imagesmall}
                        source={require('../assets/images/actu3.jpg')}
                    />
                    <Text style={{textAlign:'center', fontSize: 15}}>
                    Through the MEET-More Equal Europe Together project which aims to prevent gender-based Islamophobia in Europe, POUR LA SOLIDARITÉ-PLS organized an interactive guided tour in the municipality of Saint-Gilles, Region of Brussels-Capital on Thursday 27 of August 2020. Summary of the tour whose main objective was to promote cohesion in a society as diverse as Brussels!
                    </Text>
                </View>
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
        width: 200,
        height: 200,
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        height: 'auto',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 40,
        padding: 25,
    },
    actutitle: {
        fontSize: 26,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
    },
});


export default InfoScreen;