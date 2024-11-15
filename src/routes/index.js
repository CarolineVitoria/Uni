import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {KeyboardAvoidingView,  Platform} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import Welcome from '../pages/Welcome'
import Login from '../pages/login'
//import Register from '../pages/cadastro'
import Home from '../pages/Home'
import Cadastro from '../pages/cadastro'
import { Usuario } from '../pages/Usuario';
import { Favoritos } from '../pages/Favoritos';
import Evento from '../pages/Evento';
import CriacaoEvento from '../pages/CriacaoEvento';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20} // Ajusta o deslocamento para o teclado não cobrir a tabBar
      >
        <Tab.Navigator
                   screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                      backgroundColor: '#2A629A',  // Cor de fundo da tabBar
                      height: 50,  // Definir uma altura fixa para a tabBar
                      paddingBottom: 0,
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      right: 20,
                      borderRadius: 20,  // Arredondar os cantos da tab bar
                      elevation: 10,
                    },
                    tabBarActiveTintColor: 'tomato',  // Cor ativa do ícone
                    tabBarInactiveTintColor: '#FFF3E4',  // Cor inativa do ícone
                  }}
        >

            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: ()=>null

                }}>
            </Tab.Screen>
            <Tab.Screen name="favoritos" component={Favoritos}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name='hearto' color={color} size={size} />,
                    tabBarLabel: ()=>null

                }}></Tab.Screen>
            <Tab.Screen name="usuario" component={Usuario}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
                    tabBarLabel: ()=>null

                }}
            ></Tab.Screen>
                        <Tab.Screen name="criacaoEvento" component={CriacaoEvento}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='plus' color={color} size={size} />,
                    tabBarLabel: ()=>null

                }}
            ></Tab.Screen>
            

        </Tab.Navigator></KeyboardAvoidingView>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='cadastro'
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
             name="Evento"
             component={Evento}
             options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}