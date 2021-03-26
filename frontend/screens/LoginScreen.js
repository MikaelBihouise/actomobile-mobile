import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';


function LoginScreen(props) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    return(
        <View style={styles.container}>
            <Text style={styles.infotexttitle}>Connection</Text>
            <Input 
                style={{ color: '#262626' }}
                inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                placeholder='Email'
                placeholderTextColor="#262626" 
                onChangeText={(value) => setSignInEmail(value)}
                value={signInEmail}
            />
            <Input 
                style={{ color: '#262626' }}
                inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center',paddingLeft: 3 }}
                placeholder='Password'
                placeholderTextColor="#262626" 
                onChangeText={(value) => setSignInPassword(value)}
                value={signInPassword}
            />
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => props.navigation.navigate('Dashboard')}
                >
                    <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#262626'}}>SE CONNECTER</Text>
            </TouchableOpacity>
        </View>
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
    infotexttitle: {
        marginTop: 45,
        fontSize: 35,
        color: '#262626',
        fontFamily: 'BebasNeue_400Regular'
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
});

export default LoginScreen;