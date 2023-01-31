import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, Platform } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import textStyles from '../../utils/textStyles';
import { color, sub } from 'react-native-reanimated';
import SideBarItem from '../UI/SideBarItem';
import { ScrollView } from 'react-native-gesture-handler';
import PrimaryBtn from '../UI/PrimaryBtn';
import Colors from '../../utils/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function SidebarMenu( {props}) {
  return (
    <View style={styles.root}>

        <SafeAreaView>
            <Image 
            source={require('../../assets/images/sidebar_profile_img.png')}
            style={styles.headerImg}/>
            <Text style={[textStyles.h3 , styles.heading]}>Farion Wick</Text>
            <Text style={[textStyles.h6 ,styles.subHeading]}>farionwick@gmail.com</Text>

           
            <ScrollView>

            <SideBarItem label="My Orders" image={require("../../assets/icons/sidebarIcons/orderIcon.png")}/>
            <SideBarItem label="My Profile" image={require("../../assets/icons/sidebarIcons/profileIcon.png")}/>
            <SideBarItem label="Delivery Address" image={require("../../assets/icons/sidebarIcons/locationIcon.png")}/>
            <SideBarItem label="Payment Methods" image={require("../../assets/icons/sidebarIcons/paymentIcon.png")}/>
            <SideBarItem label="Contact Us" image={require("../../assets/icons/sidebarIcons/contactIcon.png")}/>
            <SideBarItem label="Settings" image={require("../../assets/icons/sidebarIcons/settingIcon.png")}/>
            <SideBarItem label="Helps & FAQs" image={require("../../assets/icons/sidebarIcons/helpIcon.png")}/>


            <Pressable    style={ ({pressed}) => [styles.outerContainer ,pressed && styles.pressed]} >
        <View style={{flexDirection:'row' ,alignContent:'center' ,alignItems:'center'}}>
            <Image
            source={require('../../assets/icons/logoutIcon.png')}
            style/>
            <Text style={[textStyles.h4 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>Log Out</Text>

        </View>
    </Pressable>


            

            </ScrollView>

          


        </SafeAreaView>
     
    </View>
  )
}


const styles = StyleSheet.create({

    root:{
        flex:1,
        marginLeft:30,
        marginTop:Platform.OS ==='ios' ? 50 : 20,

    },

    headerImg:{
        borderRadius:65,
        height:130,
        width:130,

    },
    heading:{
        marginTop:10,
        marginBottom:5,
    
    },
    subHeading:{
        color:'#9EA1B1',
        marginBottom:20,

    },
    outerContainer:{

        backgroundColor:Colors.primary,
        width:widthPercentageToDP("35%"),
        paddingHorizontal:5, 
        marginTop:45,
        marginBottom:20,
        marginHorizontal:5,
        borderRadius:28,
        paddingVertical:10,
        elevation:4,
        shadowColor: Colors.gray80,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 8,
    },

    pressed:{
        opacity: 0.7,
    },
    logoutImage:{
        width:22,
        height:22,
    }
    
    


});