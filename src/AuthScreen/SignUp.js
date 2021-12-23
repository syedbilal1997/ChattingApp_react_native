import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';



const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.logo} source={require('./logo1.png')}/>
      </View>
      <View style={styles.body}>
        <TextInput 
          placeholder='Full Name'
          style={styles.textField}
          // onChangeText={()=>{}}
        />
        
        <TextInput 
          placeholder='Email Address'
          style={styles.textField}
          // onChangeText={()=>{}}
        />
        <TextInput 
          placeholder='Password'
          style={styles.textField}
          secureTextEntry
          // onChangeText={()=>{}}
        />
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.txtbtn]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={[ styles.row]}>
          <Text style={[styles.footertext]}>
            If you already have an account, click here to{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.footertext, {color: 'rgb(0,0,355)'}]}>
              Login
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
    flex:.3,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomHeader:{

  },
  logo:{
    resizeMode:'contain',
    height: 150,
    width: 150
  },
  body:{
    flex:.7,
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

export default SignUpScreen;