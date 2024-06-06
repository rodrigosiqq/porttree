import { StatusBar } from 'expo-status-bar';
import { Home } from './Screens/Home/Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MySkills from './Screens/MySkills/MySkills';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{
          title: 'Porttree',
          headerTintColor:'purple',
          headerStyle:{backgroundColor:'#1F1F1F'}
        }}/>
      <Stack.Screen name='MySkills' component={MySkills}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MyStack />  
    </NavigationContainer>
  );
}