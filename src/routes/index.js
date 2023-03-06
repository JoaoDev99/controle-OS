import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import AddOS from '../pages/AdicionarOS';
import Steps from '../pages/Passos';
import Auth from '../pages/Auth';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MyStack} />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddOS"
        component={AddOS}
        options={{
          title: 'Adicionar OP',
        }}
      />
      <Stack.Screen
        name="Steps"
        component={Steps}
        options={{
          title: 'Passos',
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
