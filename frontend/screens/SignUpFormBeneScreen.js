import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux'


function SignUpFormBeneScreen(props) {

    const selectCompetence = [
        {
            value: 'Biologie',
            label: 'Biologie',
        },
        {
            value: 'Cloud Computing',
            label: 'Cloud Computing',
        },

        {
            value: 'Electronique',
            label: 'Electronique',
        },

        {
            value: 'Evènementiel',
            label: 'Evènementiel',
        },
        {
            value: 'IA (Intelligence Artificielle)',
            label: 'IA (Intelligence Artificielle)',
        },
        {
            value: 'Infirmier(e)',
            label: 'Infirmier(e)'
        },
        {
            value: 'Informatique',
            label: 'Informatique',
        },

        {
            value: 'Juridique',
            label: 'Juridique'
        }, 

        {
            value: 'Maçon',
            label: 'Maçon'
        },

        {
            value: 'Marketing et conception de vidéos',
            label: 'Marketing et conception de vidéos'
        },
        {
            value: 'Mécanicien(e)',
            label: 'Mécanicien(e)'
        },
        {
            value: 'Médecin',
            label: 'Médecin'
        },
        {
            value: 'Menuisier',
            label: 'Menuisier'
        },
        
        {
            value: 'Musicien',
            label: 'Musicien'
        },

        {
            value: 'Plombier',
            label: 'Plombier'
        },
        {
            value: 'Professeur des écoles',
            label: 'Professeur des écoles'
        },
        {
            value: 'Traducteur(rice)',
            label: 'Traducteur(rice)'
        },

        {
            value: 'UX Design',
            label: 'UX Design',
        },

        
        {
            value: 'Web analytique',
            label: 'Web analytique',
        },

        {
            value: 'Web Design',
            label: 'Web Design',
        },
        {
            value: 'Web Dev',
            label: 'Web Dev',
        },
    ];

    const selectDispo = [
        {
            value: 'À distance',
            label: 'À distance',
        },
        {
            value: 'Locale',
            label: 'Locale',
        },
        {
            value: 'Les Deux',
            label: 'Les Deux',
        }
    ];

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
    const [signUpVille, setSignUpVille] = useState('')
    const [signUpSkill, setSignUpSkill] = useState([])
    const [signUpExpPro, setSignUpExpPro] = useState('')
    const [signUpDispo, setSignUpDispo] = useState(null)
    const [signUpVisibility, setSignUpVisibility] = useState(null)
    const [signUpCV, setSignUpCV] = useState(null)
    const [signUpDesc, setSignUpDesc] = useState('')
    const [signUpImage, setSignUpImage] = useState('')

    const [formulaireOK, setFormulaireOK] = useState(false)

    var handleSubmitSignupForm = async () => {
    
        const data = await fetch('http://192.168.42.139:3000/users/volunteer-sign-up-form-mobile', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:`nameFromFront=${signUpName}&firstNameFromFront=${signUpFirstName}&villeFromFront=${signUpVille}&skillFromFront=${(signUpSkill)}&expProFromFront=${signUpExpPro}&dispoFromFront=${signUpDispo.value}&visibiliteFromFront=${signUpVisibility.value}&descFromFront=${signUpDesc}&cvFromFront=${signUpCV}&token=${props.token}`
        })
        const body = await data.json()

        if (body.result === true) {
            setFormulaireOK(true)
        }
    }

    if (formulaireOK){
        return (<Redirect to='/Dashboard'/>)
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
                    placeholder='Ville'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpVille(value)}
                    value={signUpVille}
                />
                <DropDownPicker
                    items={selectCompetence}
                    containerStyle={{height: 50, width: 250}}
                    multiple={true}
                    min={0}
                    max={15}
                    defaultValue = {[]} // Multiple
                    multipleText="%d de séléctionné"
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
                    placeholder="Vos compétences"
                    dropDownStyle={{
                        backgroundColor: '#fcfcfc',
                        borderWidth:1,
                        borderColor: '#262626',
                    }}
                    onChangeItem={(value) => setSignUpSkill(value)}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                    placeholder='Expériences professionelles'
                    placeholderTextColor="#262626" 
                    onChangeText={(value) => setSignUpExpPro(value)}
                    value={signUpExpPro}
                />
                <DropDownPicker
                    items={selectDispo}
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
                    placeholder="Vos disponibilité"
                    dropDownStyle={{
                        backgroundColor: '#fcfcfc',
                        borderWidth:1,
                        borderColor: '#262626',
                    }}
                    onChangeItem={(value) => setSignUpVisibility(value)}
                />
                <DropDownPicker
                    items={selectVisibilite}
                    containerStyle={{height: 50, width: 250, marginTop:30}}
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
                    onChangeItem={(value) => setSignUpDispo(value)}
                />
                <Input 
                    style={{ color: '#262626' }}
                    inputContainerStyle={{ borderBottomColor: '#262626', width:250, alignSelf:'center', marginTop: 30, paddingLeft: 3 }}
                    placeholder='Description de votre profil'
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