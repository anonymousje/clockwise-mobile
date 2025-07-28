import { Appearance } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Login from './packages/features/Login/container/LoginScreen';
import { SCREENS } from './packages/constants/screens';
import ForgotPassword from './packages/features/ForgotPassword/container/ForgotPasswordScreen';
import Dashboard from './packages/features/Dashboard/container/DashboardScreen';
import store from './packages/store';
import { RoutesTypes } from './packages/features/types';
import NewPassword from './packages/features/ForgotPassword/container/NewPasswordScreen';
import Staff from './packages/features/Staff/container/StaffScreen';
import AddEmployee from './packages/features/Staff/container/AddEmployeeScreen';
import { colors, MODE } from './packages/constants/theme';
import StaffDetail from './packages/features/Staff/container/StaffDetailScreen';

const config = {
  screens: {
    [SCREENS.Login]: 'login',
    [SCREENS.ForgotPassword]: 'forgotpassword',
    [SCREENS.NewPassword]: {
      path: 'reset-password',
      parse: {
        email: (email: string) => decodeURIComponent(email),
        token: (token: string) => decodeURIComponent(token),
      },
    },
    [SCREENS.Dashboard]: 'dashboard',
  },
};

const linking = {
  prefixes: ['clockwise://', 'https://clockwise.com'],
  config,
};

const Tab = createBottomTabNavigator();

const DashboardTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons
    name='home-outline'
    size={size}
    color={color}
    style={{ width: size, height: size }}
  />
);

const StaffTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons
    name='people-outline'
    size={size}
    color={color}
    style={{ width: size, height: size }}
  />
);

function MainTabs() {
  const mode = Appearance.getColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            mode === MODE.DARK
              ? colors.BACKGROUND_DARK_MODE
              : colors.BACKGROUND_LIGHT_MODE,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.Dashboard}
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: DashboardTabIcon,
        }}
      />

      <Tab.Screen
        name={SCREENS.Staff}
        component={Staff}
        options={{
          title: 'Staff',
          headerShown: false,
          tabBarIcon: StaffTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const Stack = createStackNavigator<RoutesTypes>();

  const mode = Appearance.getColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREENS.Login}
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgotPassword}
            options={{
              title: 'Forgot Password',
              headerTitleStyle: {
                color:
                  mode === MODE.DARK
                    ? colors.TEXT_DARK_MODE
                    : colors.TEXT_LIGHT_MODE,
              },

              headerStyle: {
                backgroundColor:
                  mode === MODE.DARK
                    ? colors.BACKGROUND_DARK_MODE
                    : colors.BACKGROUND_LIGHT_MODE,
              },

              headerTintColor:
                mode === MODE.DARK
                  ? colors.TEXT_DARK_MODE
                  : colors.TEXT_LIGHT_MODE,
            }}
          />

          <Stack.Screen
            name={SCREENS.NewPassword}
            component={NewPassword}
            options={{
              title: 'Forgot Password',
              headerTitleStyle: {
                color:
                  mode === MODE.DARK
                    ? colors.TEXT_DARK_MODE
                    : colors.TEXT_LIGHT_MODE,
              },
              headerStyle: {
                backgroundColor:
                  mode === MODE.DARK
                    ? colors.BACKGROUND_DARK_MODE
                    : colors.BACKGROUND_LIGHT_MODE,
              },
              headerTintColor:
                mode === MODE.DARK
                  ? colors.TEXT_DARK_MODE
                  : colors.TEXT_LIGHT_MODE,
            }}
          />

          <Stack.Screen
            name={SCREENS.MainTabs}
            component={MainTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={SCREENS.AddEmployee}
            component={AddEmployee}
            options={{
              headerShown: true,
              title: 'Add Employee',
              headerTitleStyle: {
                color:
                  mode === MODE.DARK
                    ? colors.TEXT_DARK_MODE
                    : colors.TEXT_LIGHT_MODE,
              },
              headerStyle: {
                backgroundColor:
                  mode === MODE.DARK
                    ? colors.BACKGROUND_DARK_MODE
                    : colors.BACKGROUND_LIGHT_MODE,
              },
              headerTintColor:
                mode === MODE.DARK
                  ? colors.TEXT_DARK_MODE
                  : colors.TEXT_LIGHT_MODE,
            }}
          />

          <Stack.Screen
            name={SCREENS.StaffDetail}
            component={StaffDetail}
            options={{
              headerShown: true,
              title: 'Employee Details',
              headerTitleStyle: {
                color:
                  mode === MODE.DARK
                    ? colors.TEXT_DARK_MODE
                    : colors.TEXT_LIGHT_MODE,
              },
              headerStyle: {
                backgroundColor:
                  mode === MODE.DARK
                    ? colors.BACKGROUND_DARK_MODE
                    : colors.BACKGROUND_LIGHT_MODE,
              },
              headerTintColor:
                mode === MODE.DARK
                  ? colors.TEXT_DARK_MODE
                  : colors.TEXT_LIGHT_MODE,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
