import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import NFL_Logo from '../../assets/NFL_Logo.jpg'
import Glennon from '../../assets/Mike_Glennon.jpg';
import SubmissionButton from '../components/SubmissionButton';
import StyleSheet69 from '../components/StyleReference'
const styles = StyleSheet69();



function HomeScreen2({navigation, route}) {
  
    return (
      <View style={styles.box}>
  
        <View style={styles.row}>
  
          <View style={styles.imageBox}>
  
            <Image style = {styles.nflLogo} source={NFL_Logo}/>
  
          </View>
            
          <View style={styles.imageBox}>
  
            <Image source={Glennon} style={styles.profilePhoto} />
  
          </View>
              
        </View>
  
        <View >
  
          <View style ={styles.row2}>
  
            <TouchableOpacity>
              <View style={styles.buttonLittle}>
                <Text style={styles.buttonText}>Button</Text> 
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <View style={styles.buttonLittle}>
                <Text style={styles.buttonText}>Button</Text> 
              </View>
            </TouchableOpacity>
  
          </View>
  
          <View style ={styles.row3}>
  
            <TouchableOpacity>
              <View style={styles.buttonLittle}>
                <Text style={styles.buttonText}>Button</Text> 
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity>
  
              <View style={styles.buttonLittle}>
  
                <Text style={styles.buttonText}>Button</Text> 
  
              </View>
  
            </TouchableOpacity>
  
          </View>
  
  
          <View style ={styles.row3}>
  
            <TouchableOpacity>
  
              <View style={styles.buttonRectangle}>
  
                <Text style={styles.buttonText}>Button</Text> 
  
              </View>
  
            </TouchableOpacity>
  
          </View>
          <View style ={styles.row3}>
  
            <TouchableOpacity>
  
              <View style={styles.buttonRectangle}>
  
                <Text style={styles.buttonText}>Button</Text> 
  
              </View>
  
            </TouchableOpacity>
  
          </View>
  
        </View>
        
      </View>
    );
  }
  export default HomeScreen2;