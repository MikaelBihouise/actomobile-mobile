import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

function HomeScreen(props) {

        return (
            <View style={styles.container}>
                <Text style={styles.hometext}>Bienvenue sur</Text>
                <Text style={styles.hometexttitle}>ACTOMOBILE</Text>
                <Link 
                style={styles.button}
                to='/Info'
                >
                    <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#262626'}}>EN SAVOIR PLUS</Text>
                </Link>
                <Text style={styles.divider}></Text>
                <Link
                style={styles.button2Purple}
                to='/Login'
                >
                    <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#fff'}}>SE CONNECTER</Text>
                </Link>
                <Link 
                style={styles.button2}
                to='/SignUp'
                >
                    <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#262626'}}>S'INSCRIRE</Text>
                </Link>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        marginBottom: 10,
        marginTop: 20,
        height: 1,
        width: 200,
        backgroundColor: '#262626'
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#2A9D8F",
        color: "#262626",
        marginTop: 20,
        fontFamily:'Roboto-Regular',
        borderRadius: 5,
    },
    button2: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#2A9D8F",
        color: "#262626",
        marginTop: 20,
        fontFamily:'Roboto-Regular',
        borderRadius: 5,
    },
    button2Purple: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#803BCA",
        color: "#fff",
        marginTop: 10,
        fontFamily:'Roboto-Regular',
        borderRadius: 5,
    },
    hometext: {
        fontSize: 22,
        lineHeight: 22,
        color: '#262626',
        fontFamily:'Roboto-Regular'
    },
    hometexttitle:{
        fontSize: 65,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
    }
});

export default HomeScreen;