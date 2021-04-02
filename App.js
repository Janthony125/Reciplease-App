import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


function WelcomeScreen() {
  return (
    <View>
       <Text style={styles.boldText}>What type of diet are you on?</Text>

       <View style={styles.q1}>
       <Button
        color="black"
        title="Vegetarian"
        onPress={() => alert('Vegeterian meals coming up')}
        />
     </View>

     <View style={styles.q2}>
     <Button
       color="black"
       title="Vegan"
       onPress={() => alert('Vegan coming up')}
     />
     </View>

     <View style={styles.q3}>
     <Button
       color="black"
       title="Pescatarian"
       onPress={() => alert('Pescatarian meals coming up')}
     />
     </View>

     <View style={styles.q4}>
     <Button
       color="black"
       title="Normal"
       onPress={() => alert('Normal meals coming up')}
     />
     </View>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex:1
        }
      }>
       <Button 
          title="FIND YOUR RECIPE"
          onPress={() => navigation.navigate('Questions')} />
        <Image
             style={styles.img}
             source={require('./assets/mainDesign.jpg')}
        /> 
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  const question = {
    questionText: 'What type of diet are you on?',
    options: [
      {option1: 'Vegetarian'},
      {option2: 'Vegan'},
      {option3: 'Pescatarian'},
      {option4: 'Normal'},
    ]
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RECIPLEASE">
        <Stack.Screen name="RECIPLEASE" component={HomeScreen}/>
        <Stack.Screen name="Questions" component={WelcomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  questionHeader: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  q1: {
    backgroundColor: '#008000',
    padding: 20
  },
  q2: {
    backgroundColor: `#e0ffff`,
    padding: 20
  },
  q3: {
    backgroundColor: `#ffdead`,
    padding: 20
  },
  q4: {
    backgroundColor: `#ffff00`,
    padding: 20
  },
  img: {
    flex: 1,
    width:400,
    height:200,
    resizeMode: 'contain',
  },
});
