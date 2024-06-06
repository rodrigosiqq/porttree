import React from "react";
import { View, Image } from "react-native";
import ProfilePic from '../../assets/profile.png';



export function Profile (){
    return(
        <View>
            <Image
            source={ProfilePic}
            style={{
                width:120,
                height:120,
                borderRadius:60,
                borderColor:'purple',
                borderWidth:2,
            }}
            >
            </Image>
        </View>
    )
}
