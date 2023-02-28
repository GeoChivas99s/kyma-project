import Welcome from "../welcome/Welcome";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../home/home";
import { Account } from "../account/account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import { EmptyScreen } from "../emptyScreen/emptyScreen";
import { TouchableOpacity } from "react-native";
import Chat from "../chat/chat";
const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
     
      screenOptions={({ route }) => ({
        
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble";
          }

          return (
            <Ionic
              name={iconName}
              style={{ position: "absolute", top: "50%" }}
              size={30}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#8381ca",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
