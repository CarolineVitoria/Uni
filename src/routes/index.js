import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Login from '../pages/login'
//import Register from '../pages/cadastro'
import Home from '../pages/Home'
import Cadastro from '../pages/cadastro'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name='cadastro'
                component={Cadastro}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false }}
            />
        </Stack.Navigator>
    )
}