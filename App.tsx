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
import { colors, FONT_SIZE, HEIGHT, MODE } from './packages/constants/theme';
import StaffDetail from './packages/features/Staff/container/StaffDetailScreen';
import STRINGS from './packages/utils/strings';
import LINK_PREFIX from './packages/constants/links';
import ICONS from './packages/constants/Icons';

const config = {
  screens: {
    [SCREENS.Login]: LINK_PREFIX.LOGIN,
    [SCREENS.ForgotPassword]: LINK_PREFIX.FORGOT_PASSWORD,
    [SCREENS.NewPassword]: {
      path: LINK_PREFIX.NEW_PASSWORD,
      parse: {
        email: (email: string) => decodeURIComponent(email),
        token: (token: string) => decodeURIComponent(token),
      },
    },
    [SCREENS.Dashboard]: LINK_PREFIX.DASHBOARD,
  },
};

const linking = {
  prefixes: [LINK_PREFIX.CLOCKWISE, LINK_PREFIX.HTTPS],
  config,
};

const Tab = createBottomTabNavigator();

const DashboardTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons
    name={ICONS.home}
    size={size}
    color={color}
    style={{ width: size, height: size }}
  />
);

const StaffTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons
    name={ICONS.people}
    size={size}
    color={color}
    style={{ width: size, height: size }}
  />
);

const MainTabs = () => {
  const mode = Appearance.getColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            mode === MODE.DARK
              ? colors.BACKGROUND_DARK_MODE
              : colors.BACKGROUND_LIGHT_MODE,
          height: HEIGHT.MEDIUM,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.BUTTON_SMALL,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.Dashboard}
        component={Dashboard}
        options={{
          title: STRINGS.SCREEN_TITLE.DASHBOARD,
          headerShown: false,
          tabBarIcon: DashboardTabIcon,
        }}
      />

      <Tab.Screen
        name={SCREENS.Staff}
        component={Staff}
        options={{
          title: STRINGS.SCREEN_TITLE.STAFF,
          headerShown: false,
          tabBarIcon: StaffTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
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
              title: STRINGS.SCREEN_TITLE.FORGOT_PASSWORD,
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
              title: STRINGS.SCREEN_TITLE.NEW_PASSWORD,
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
              title: STRINGS.SCREEN_TITLE.ADD_EMPLOYEE,
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
              title: STRINGS.SCREEN_TITLE.STAFF_DETAIL,
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
};

export default App;
