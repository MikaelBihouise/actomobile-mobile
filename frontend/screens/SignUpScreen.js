import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux'


function SignUpScreen(props) {

    const dataSelect = [
        {
            value: 1,
            label: 'Bénévoles'
        },
        {
            value: 2,
            label: 'Oeuvre caritatives',
        }
    ];

    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpType, setSignUpType] = useState()

    const [assoExists, setAssoExists] = useState(false)
    const [benevoleExists, setBenevoleExists] = useState(false)
    
    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignup = async () => {
    
        const data = await fetch('http://192.168.42.139:3000/users/sign-up', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&typeFromFront=${signUpType.value}`
        })
    
        const body = await data.json()

        if(body.result === true && body.type === "Oeuvres caritatives"){
            props.addToken(body.token)
            setAssoExists(true)    
        } else {  
            setErrorsSignup(body.error)
        }
        
        if (body.result === true && body.type === "Bénévoles") {
            props.addToken(body.token)
            setBenevoleExists(true)
        } else {  
            setErrorsSignup(body.error)
        }
    }

    if(benevoleExists){
        return ( <Redirect to='/SignUpFormBene'/> );
    }  

    if(assoExists){
        return ( <Redirect to='/SignUpFormAsso'/> );
    }    
    
        var tabErrorsSignup = listErrorsSignup.map((error,i) => {
            return(<Text>{error}</Text>)
        })

    return(
        <View style={styles.container}>
            <Text style={styles.infotexttitle}>INSCRIPTION</Text>
            <Input 
                style={{ color: '#262626' }}
                inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                placeholder='Email'
                placeholderTextColor="#262626" 
                onChangeText={(value) => setSignUpEmail(value)}
                value={signUpEmail}
            />
            <Input 
                style={{ color: '#262626' }}
                inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center',paddingLeft: 3 }}
                placeholder='Password'
                placeholderTextColor="#262626" 
                onChangeText={(value) => setSignUpPassword(value)}
                value={signUpPassword}
            />
            <DropDownPicker
                items={dataSelect}
                containerStyle={{height: 50, width: 250}}
                style={{
                    backgroundColor: '#fff',
                    paddingLeft: 0,
                    marginLeft: 0,
                    borderWidth:0,
                    borderBottomWidth: 1,
                    borderBottomColor: '#262626'
                }}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                labelStyle={{
                    fontSize: 17,
                    textAlign: 'left',
                    color: '#262626',
                    fontFamily: "Roboto-Regular",
                }}
                placeholder="Type de profil"
                dropDownStyle={{
                    backgroundColor: '#fcfcfc',
                    borderWidth:1,
                    borderColor: '#262626',
                }}
                onChangeItem={(value) => setSignUpType(value)}
            />
            {tabErrorsSignup}
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => handleSubmitSignup()}
                >
                    <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#262626'}}>M'INSCRIRE</Text>
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
)(SignUpScreen);