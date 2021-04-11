import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Redirect } from 'react-router';
import {connect} from 'react-redux'


function LoginScreen(props) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    
    const [assoExists, setAssoExists] = useState(false)
    const [beneExists, setBeneExists] = useState(false)

    var handleSubmitSignIn = async () => {

        const data = await fetch('http://192.168.42.66:3000/users/sign-in', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })
    
        const body = await data.json()

        console.log(body)
    
        if(body.result === true && body.userAssociation!==null){
            props.addToken(body.userAssociation.token)
            setAssoExists(true)
        } else if(body.result === true && body.userBenevole!==null) {
            props.addToken(body.userBenevole.token)
            setBeneExists(true)
        }
    };

    if(assoExists){
        return (<Redirect to='/DashboardAsso'/>)
    }
    
    if(beneExists){
        return (<Redirect to='/Dashboard'/>)
    }

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
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => handleSubmitSignIn()}
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

function mapDispatchToProps(dispatch){
    return {
        addToken: function(token){
        dispatch({type: 'addToken', token: token})
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LoginScreen);