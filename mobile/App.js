/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import { UserProvider } from "~provider/UserProvider";
import ScreensHomeMain from "~screens/Home/Main";
import ProfileScreen from "~screens/Profile/UserProfile";

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
import { LoginScreen } from "~login/login";

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const csignup = <LoginScreen SignUp = {true}></LoginScreen>

  return (
    <BottomTab.Navigator
      initialRouteName="Home" // What tab do we want to default to
      screenOptions={{
        // This gives us the ability to add addtional
        tabBarShowLabel: false, // options when we create the bottom tab
        tabBarStyle: [
          {
            // most importantly the style component
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            paddingBottom: 5,
          },
        ],
      }}
    >
      <BottomTab.Screen
        name="Log in"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="log-in-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sign up"
        component={LoginScreen}
        initialParams = {{SignUp: true}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-add-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Your Feed"
        component={ScreensHomeMain}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={ScreensHomeMain}
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon size={65} name="add-circle" color={Colors.purple10} />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={ScreensHomeMain}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="alarm" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
