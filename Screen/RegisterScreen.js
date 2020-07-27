import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const RegisterScreen=({navigation})=>
{  
  const[UserName,setUserName]=useState('');
  const[UserEmail,setUserEmail]=useState('');
  const[UserPassword,setUserPassword]=useState('');

  const onSubmit=async()=>{
       try{
         if(UserName=='' || UserEmail==''||UserPassword=='')
         {
           alert('Please fill the entries')
         }
         else if(UserName==UserEmail && UserEmail=='' && UserPassword==UserPassword)
         {
           alert('Please fill Email')
         }
         else if(UserName==UserEmail && UserEmail==UserEmail && UserPassword=='')
         {
           alert('Please fill Password')
         }
         else
         {
           await AsyncStorage.setItem('UserName',UserName)
           await AsyncStorage.setItem('UserEmail',UserEmail)
           await AsyncStorage.setItem('UserPassword',UserPassword)
           alert('Registration Successfully')
           navigation.navigate('LoginScreen')   
         }
    }
       catch(error)
       {
           console.log(error)
       }
   }
  
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Assest/logo.png')}
            style={{
              width: 200,
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Enter Name"
              placeholderTextColor="#0c0c0e"
              autoCapitalize="sentences"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#0c0c0e"
            />
          </View>
          <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#0c0c0e"
                secureTextEntry={true}
              />
            </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={onSubmit}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#0d0d0d',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#0c0c0e',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#0c0c0e',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#0c0c0e',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  }
});

export default RegisterScreen