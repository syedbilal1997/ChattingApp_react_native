import React, {useState} from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Config from '../../config.json'
const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass , setPass] = useState('');
  const [userData, setUserData] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.logo} source={require('./logo1.png')}/>
      </View>
      <View style={styles.body}>
        <TextInput 
          placeholder='Username'
          style={styles.textField}
          value={user}
          onChangeText={setUser}
          />
        <TextInput 
          placeholder='Password'
          style={styles.textField}
          value={pass}
          secureTextEntry
          onChangeText={setPass}
        />
        {/* {console.log("username", user , "pass" , pass)} */}
        <Text style={styles.forgetPass}>Forget password</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.txtbtn]}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={[ styles.row]}>
          <Text style={[styles.footertext]}>
            Dont have an account? Click here to{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.footertext, {color: 'rgb(0,0,355)'}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    // justifyContent: 'center',\
  },
  imageView:{
    flex:.40,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomHeader:{

  },
  logo:{
    resizeMode:'contain',
    height: 200,
    width: 200
  },
  body:{
    flex:.6,
    padding:10,
    paddingLeft:20,
    paddingRight:20
  },
  
  // input text and button
  textField:{
    backgroundColor:'#fff',
    height:(Dimensions.get('window').height+Dimensions.get('window').width)/22,
    borderRadius:10000,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    paddingLeft:30,
    marginTop:"5%",
    elevation:10,
  },

  button:{
    marginTop:'10%',
    alignSelf:'center',
    backgroundColor:'blue',
    alignItems: 'center',
    borderRadius:1000,
    justifyContent: 'center',
    height:(Dimensions.get('window').height+Dimensions.get('window').width)/20,
    width:(Dimensions.get('window').height+Dimensions.get('window').width)/7,
  },
  txtbtn:{
    fontFamily: 'Montserrat-Bold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    color:'white',
  },

  /// text styles
  forgetPass:{
    marginTop:'5%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    color:'blue',
    alignSelf: 'flex-end',
  },


  // header
  footer: {
    flex:.075,
    backgroundColor: 'rgb(245,245,245)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  footertext: {
    color: 'rgb(104,111,140)',
    // fontSize:'12@s',
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default LoginScreen;