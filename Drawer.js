import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Message from './Screens/Message';
import Contact from './Screens/Contact';
import Animated, { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {  
    return(
      <Animated.View style={[{flex:1}, style]}> 
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity onPress ={() => navigation.openDrawer()}>
                     <Image 
                        source={require('./src/images/computer.png')}
                        style={{width:30, height:30, left:5, bottom:6, tintColor:"#565d69", }}
                        />
                    </TouchableOpacity>
                )
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Message" component={Message}/>
            <Stack.Screen name="Contact" component={Contact}/>
        </Stack.Navigator>   
     </Animated.View>   
    );
};

const DrawerContent = props => { 
    return(
        
        <DrawerContentScrollView {...props} >
            <View style={{flex:0.4, margin:20, backgroundColor:"transparent"}}>
                <Image 
                    source={require('./src/images/myimage.jpg')}
                    style={{width:120, height:120, borderRadius:70 }} />
                <Text style={{ marginTop:10, fontSize:20}}>Keerthivasan M</Text>
                <Text style={{ fontSize:12}}>React-Native (fullstack developer)</Text>
            </View>
            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
            />
            <DrawerItem
                label="Message"
                onPress={() => props.navigation.navigate("Message")}
            />
            <DrawerItem
                label="Contact"
                onPress={() => props.navigation.navigate("Contact")}
            />
        </DrawerContentScrollView>
    );
};

export default () =>
{
  const [Progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(Progress,{
      inputRange: [0,1],
      outputRange: [1,0.8]
  });

  const borderRadius = Animated.interpolate(Progress,{
    inputRange: [0,1],
    outputRange: [0,10]
});


  const animatedStyle = { borderRadius, transform: [{ scale }] };

  const screenStyles = {transform: [{scale}] };

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#ffd89b', '#19547b']}>
          <Drawer.Navigator

            drawerType="slide"
            overlayColor="transparent"
            drawerStyle={styles.drawerStyles}
            contentContainerStyle={{ flex: 1 }}
            drawerContentOptions={{
              activeBackgroundColor: 'transparent',
              activeTintColor: 'white',
              inactiveTintColor: 'white',
            }}
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            drawerContent={props => {
              setProgress(props.progress);
              return <DrawerContent {...props} />;
            }}>
            <Drawer.Screen name="Screens">
              {props => <Screens {...props} style={animatedStyle} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        </LinearGradient>
      );
    };

    const styles = StyleSheet.create({
        stack: {
          flex: 1,
          shadowColor: '#FFF',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 5,
         
        },
        drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
        drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
        drawerLabel: { color: 'white', marginLeft: -16 },
        avatar: {
          borderRadius: 60,
          marginBottom: 16,
          borderColor: 'white',
          borderWidth: StyleSheet.hairlineWidth,
        },
      });  