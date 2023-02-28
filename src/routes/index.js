import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import AddOS from '../pages/AdicionarOS';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
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
          title: 'Adicionar OS',
        }}
      />
    </Stack.Navigator>
  );
}
