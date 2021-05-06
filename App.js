import React, { Component } from 'react';
import { Button, ScrollView, ImageBackground, StyleSheet, Text, TouchableOpacity, Linking, View, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { back } from 'react-native/Libraries/Animated/src/Easing';
import LottieView from 'lottie-react-native'


const image1 = { uri: "https://i.pinimg.com/originals/85/a5/65/85a565e92a69a64309f98b7c90357f39.jpg" };
const image2 = { uri: "https://i.pinimg.com/736x/d2/81/20/d28120e17fff92b90f26f88d10ce87dc.jpg"}

const questionSelections = ["", "", "", ""]

const addInfo = (foodA) => {
  if (foodA == "Keto" || foodA == "Normal" || foodA == "Pescatarian" || foodA == "Vegetarian" || foodA == "Vegan") {
    questionSelections[0] = foodA;
  } else if (foodA == "Less than 1 hour" || foodA == "More than 2 hours" || foodA == "More than 5 hours" || foodA == "More than 24 hours") {
    questionSelections[1] = foodA;
  } else if (foodA == "American" || foodA == "Asian" || foodA == "Italian" || foodA == "Middle Eastern" || foodA == "South American") {
    questionSelections[2] = foodA;
  } else if (foodA == "Breakfast" || foodA == "Lunch" || foodA == "Dinner" || foodA == "Snack") {
    questionSelections[3] = foodA;
  }
  console.log(questionSelections)
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {addInfo(title.slice(3))
  }} style={styles.selectionButtonContainer}>
    <Text style={styles.selectionButton}>{title}</Text>
  </TouchableOpacity>
);

class Intro extends Component {
  render() {
    return (
    <ImageBackground source={image2} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}> {}RECIPLEASE </Text>
        <LottieView 
            source={require('./assets/NewIntro.json')} 
            autoPlay 
            speed = {0.999}
        />
        <Button 
            title="START"
            onPress={() => this.props.navigation.navigate('Question 1')} />
        <Text style={styles.title}></Text> 
      </View>
    </ImageBackground>
    )
  }
};

function Q1({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <Text style = {styles.textQ}>What type of diet are you on?</Text>
        <ScrollView> 
          <View style={{ 
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center'
            }}>
          <Text style = {styles.textB}> <AppButton 
            title = "a. Keto"
            color = 'white'
          /> </Text>       
          <Text style = {styles.textB}> <AppButton 
            title = "b. Normal"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "c. Pescatarian"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "d. Vegetarian"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "e. Vegan"
            color = 'white'
          /> </Text>  
             </View>
        </ScrollView>
      </ImageBackground>
      <Button 
          title="Continue"
          onPress={() => navigation.navigate('Question 2')} />
    </View>
  )
}

function Q2({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <Text style = {styles.textQ}>How long would you like to spend cooking?</Text>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center'
            }}>
            <Text style = {styles.textB}> <AppButton 
              title = "a. Less than 1 hour"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "b. More than 2 hours"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "c. More than 5 hours"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "d. More than 24 hours"
              color = 'white'
            /> </Text>                   
             </View>
        </ScrollView> 
      </ImageBackground>
      <Button 
          title="Continue"
          onPress={() => navigation.navigate('Question 3')} />
    </View>
  )
}

function Q3({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <Text style = {styles.textQ}>What cuisine style are you craving to make?</Text>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center'
            }}>
            <Text style = {styles.textB}> <AppButton 
              title = "a. American"
               color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "b. Asian"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "c. Italian"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "d. Middle Eastern"
              color = 'white'
            /> </Text>
            <Text style = {styles.textB}> <AppButton 
              title = "e. South American"
              color = 'white'
            /> </Text>
             </View>
        </ScrollView>
      </ImageBackground>
      <Button 
          title="Continue"
          onPress={() => navigation.navigate('Question 4')} />
    </View>
  )
}

function Q4({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <Text style = {styles.textQ}>What kind of food would you like?</Text>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}>
          <Text style = {styles.textB}> <AppButton 
            title = "a. Breakfast"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "b. Lunch"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "c. Dinner"
            color = 'white'
          /> </Text>
          <Text style = {styles.textB}> <AppButton 
            title = "d. Snack"
            color = 'white'
          /> </Text>
             </View>
        </ScrollView>
      </ImageBackground>
      <Button 
          title="Continue"
          onPress={() => navigation.navigate('Recipes')} />
    </View>
  )
}

const itemPress = (id) => {
  console.log(id);
  Linking.openURL(id)
}

class Q5 extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const app_id = "3f8d3cae";
    const app_key = "495af61388c497baca064e43fb05695f";
    // const app_id2 = "1cc9cfa2";
    // const app_key2 = "b77e33a85955344bd90f1545ddf1c94e";
    
    // Diet type
    var diet = "";
    if (questionSelections[0] == "Keto") {
      diet = "keto-friendly";
    } else if (questionSelections[0] == "Pescatarian") {
      diet = "pescatarian";
    } else if (questionSelections[0] == "Vegetarian") {
      diet = "vegetarian";
    } else if (questionSelections[0] == "Vegan") {
      diet = "vegan";
    } 

    // Time
    var time = "";
    if (questionSelections[1] == "Less than 1 hour") {
      time = "60";
    } else if (questionSelections[1] == "More than 2 hours") {
      time = "120%2B";
    } else if (questionSelections[1] == "More than 5 hours") {
      time = "300%2B";
    } else if (questionSelections[1] == "More than 24 hours") {
      time = "1440%2B";
    } 

    // Cuisine
    var cuisine = questionSelections[2];

    // Type of meal
    var meal = questionSelections[3];

    // Generate URL
    if (diet != "") {
      var url = "https://api.edamam.com/search?q=" + cuisine + "&app_id=" + app_id + "&app_key=" + app_key + "&Health=" + diet + "&time=" + time + "&cuisineType" + cuisine + "&mealType" + meal + "&to=100";
    } else {
      var url = "https://api.edamam.com/search?q=" + cuisine + "&app_id=" + app_id + "&app_key=" + app_key + "&time=" + time + "&cuisineType" + cuisine + "&mealType" + meal + "&to=100";
    }

    const response = await fetch(url);
    const json = await response.json();
    
    this.setState({ data: json.hits });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => itemPress(item.recipe.url)}>
        <View style = {{ flex: 1, flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
          <Image style={{ width: 50, height: 50}} source={{ uri: item.recipe.image }} />
          <View style = {{ flex: 1, justifyContent: 'center'}}>
            <Text>
              {item.recipe.label}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => {
    return (
      <View
        style= {{height: 1, width: '100%', backgroundColor: 'black'}}>
      </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item) => item.recipe.uri}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
    );
  }
}

const Stack = createStackNavigator()
const App = () =>  { 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen name="Welcome" component={Intro}/>
          <Stack.Screen name="Question 1" component={Q1}/>
          <Stack.Screen name="Question 2" component={Q2}/>
          <Stack.Screen name="Question 3" component={Q3}/>
          <Stack.Screen name="Question 4" component={Q4}/>
          <Stack.Screen name="Recipes"    component={Q5}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  title: {
    //backgroundColor: '#000000a0',
    color: 'white',
    flex: 1,
    fontSize: 70,
    fontWeight: 'bold',
    justifyContent: 'center',
    // position: 'absolute',
    textAlign: 'center'
  },
  container: {
    // backgroundColor: "",
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "#000000a0",
    flex: 1,
    position: 'absolute'
  },
  textQ: {
    backgroundColor: "#000000a0",
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 25,
    opacity: 0.8,
    paddingHorizontal: 8,
    paddingVertical: 25,
    textAlign: 'center'
  },
  textB: {
    // backgroundColor: '#DD4B08',
    // borderRadius: 10,
    // borderColor: 'white',
    // color: 'white',
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: 23,
    opacity: 1,
   // paddingHorizontal: 0,
   // paddingVertical: 0,
    textAlign: 'center'
  },
  selectionButtonContainer: {
    backgroundColor: '#DD4B08',
    borderRadius: 30,
    elevation: 3,
    paddingHorizontal: 22,
    paddingVertical: 20
  },
  selectionButton: {
    color: 'white',
    fontSize: 18,
    // fontWeight: ''
    textAlign: 'center'
  }
});

export default App;