//Imports
import { Appearance } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Login from './packages/features/Login/container/LoginScreen';
import { SCREENS } from './packages/constants/screens';
import ForgotPassword from './packages/features/ForgotPassword/container/ForgotPasswordScreen';
import Dashboard from './packages/features/Dashboard/container/DashboardScreen';
import store from './packages/features/redux/store';
import { RoutesTypes } from './packages/features/types';

//Main Function
function App() {
  //Stack Declaration
  const Stack = createStackNavigator<RoutesTypes>();
  const modeAuto = Appearance.getColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/*Login Screen */}
          <Stack.Screen
            name={SCREENS.Login}
            component={Login}
            options={{ headerShown: false }}
          />

          {/*Forgot Password Screen */}
          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgotPassword}
            options={{
              title: 'Forgot Password',
              headerTitleStyle: {
                color: modeAuto === 'dark' ? 'white' : 'black',
              },
              headerStyle: {
                backgroundColor: modeAuto === 'dark' ? '#0E2747' : '#FFFFF',
              },
              headerTintColor: modeAuto === 'dark' ? 'white' : 'black',
            }}
          />

          {/*Dashboard Screen */}
          <Stack.Screen
            name={SCREENS.Dashboard}
            component={Dashboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
