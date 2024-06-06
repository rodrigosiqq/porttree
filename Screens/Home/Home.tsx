import React from 'react';
import { View, Text, Button,} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { styles } from './StyleHome';
import { Profile } from '../../components/ProfilePic/ProfilePic';
import Linkedin from '../../components/SocialButtons/Linkedin';



export function Home({navigation}:any) {


  const handleOpenLink = async(url:string)=>{
    try{
      await Linking.openURL(url)
    } catch(error){
      console.error('erro no link', error)
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.pic} >
            <Profile/>      
        </View>
        <Text style={styles.text}>Rodrigo Siqueira</Text>

        <TouchableOpacity style={styles.SocialButtons}
        onPress={()=>handleOpenLink('https://www.linkedin.com/in/rodrigosiqq/')}
        >
          <Linkedin descript='Linkedin' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.SocialButtons}
        onPress={()=>handleOpenLink('https://github.com/rodrigosiqq')}
        >
          <Linkedin descript='Github' />
        </TouchableOpacity> 
        
        <TouchableOpacity style={styles.SocialButtons}
        onPress={()=>handleOpenLink('mailto:rodrigomsiqq@gmail.com')}     
        >
          <Linkedin descript='Email' />
        </TouchableOpacity>
        <Button
        color={'purple'}
        title="My Skills"
        onPress={() => navigation.navigate('MySkills')}
        />
    </View>
  );
}