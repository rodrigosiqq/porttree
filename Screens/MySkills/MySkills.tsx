import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './StyleMySkills';
import { Profile } from '../../components/ProfilePic/ProfilePic';
import Linkedin from '../../components/SocialButtons/Linkedin';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MySkills({navigation}:any) {
  const handleOpenLink2 = async(url:string)=>{
    try{
      await Linking.openURL(url)
    } catch(error){
      console.error('erro no link', error)
    }
  }


  return (
    <View style={styles.container}>
        <Profile/>
        <View style={styles.galerry}>
        <FontAwesome5 name="react" size={40} color="purple" />
        <FontAwesome5 name="html5" size={40} color="purple" />
        <FontAwesome5 name="css3" size={40} color="purple" />
        <MaterialCommunityIcons name="tailwind" size={40} color="purple" />
        <FontAwesome5 name="js" size={40} color="purple" />
        <FontAwesome5 name="docker" size={40} color="purple" />
        <FontAwesome5 name="python" size={40} color="purple" />
        <FontAwesome5 name="linux" size={40} color="purple" />
        </View>
        <TouchableOpacity style={styles.SocialButtons2}
        onPress={()=>handleOpenLink2('mailto:rodrigomsiqq@gmail.com')}     
        >
          <Linkedin descript='Entre em Contato'/>
        </TouchableOpacity>
    </View>
  );
}