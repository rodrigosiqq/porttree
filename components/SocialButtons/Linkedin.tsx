import React from "react"
import { Text } from "react-native"

type SocialButton={
    descript:string
}


export default function Linkedin({descript}:SocialButton){
    return(
        <Text style={{
            color:"purple",
            fontWeight:'500'
        }}>
            {descript}
        </Text>
    )
}