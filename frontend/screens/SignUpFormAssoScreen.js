import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux'


function SignUpFormBeneScreen(props) {

    const selectVisibilite = [
        {
            value: 'Public',
            label: 'Public',
        },
        {
            value: 'Limité',
            label: `Limité`,
        },
        {
            value: 'Privé',
            label: 'Privé',
        }
    ]

    const [signUpName, setSignUpName] = useState('')
    const [signUpFirstName, setSignUpFirstName] = useState('')
    const [signUpEntiteName, setSignUpEntiteName] = useState('')
    const [signUpApe, setSignUpApe] = useState('')
    const [signUpVille, setSignUpVille] = useState('')
    const [signUpVisibility, setSignUpVisibility] = useState('')
    const [signUpDesc, setSignUpDesc] = useState('')

    const [formulaireOK, setFormulaireOK] = useState(false)

    const handleSubmitSignupForm = async () => {

        console.log('click')
    
        const data = await fetch('http://192.168.42.66:3000/users/charity-sign-up-form', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:`nameFromFront=${signUpName}&firstNameFromFront=${signUpFirstName}&entiteFromFront=${signUpEntiteName}&apeFromFront=${signUpApe}&villeFromFront=${signUpVille}&descFromFront=${signUpDesc}&visibiliteFromFront=${signUpVisibility.value}&token=${props.token}`
        })
    
        const body = await data.json()

        console.log(body);

        if(body.result === true){
            setFormulaireOK(true)

    } };

    if (formulaireOK){
        return (<Redirect to='/DashboardAsso'/>)
    }


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.infotexttitle}>FORMULAIRE D'INSCRIPTION</Text>
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                    placeholder='Nom'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpName(value)}
                    value={signUpName}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', paddingLeft: 3 }}
                    placeholder='Prénom'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpFirstName(value)}
                    value={signUpFirstName}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', paddingLeft: 3 }}
                    placeholder='Entité'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpEntiteName(value)}
                    value={signUpEntiteName}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', paddingLeft: 3 }}
                    placeholder='Code APE (facultatif)'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpApe(value)}
                    value={signUpApe}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                    placeholder='Votre ville'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpVille(value)}
                    value={signUpVille}
                />
                <DropDownPicker
                    items={selectVisibilite}
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
                    placeholder="Visibilité du profil"
                    dropDownStyle={{
                        backgroundColor: '#fcfcfc',
                        borderWidth:1,
                        borderColor: '#262626',
                    }}
                    onChangeItem={(value) => setSignUpVisibility(value)}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                    placeholder='Votre Description (facultatif)'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpDesc(value)}
                    value={signUpDesc}
                />
                <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => handleSubmitSignupForm()}
                    >
                        <Text style={{ fontSize: 16, fontFamily:'Roboto-Bold', color:'#262626'}}>M'INSCRIRE</Text>
                </TouchableOpacity>
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

function mapStateToProps(state){
    return {token: state.token}
}


export default connect(
    mapStateToProps,
)(SignUpFormBeneScreen);