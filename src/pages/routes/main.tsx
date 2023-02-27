import Welcome from "../welcome/Welcome";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Home } from "../home/home";
import { Account } from "../account/account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionic name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: "#A09DF7",
        tabBarInactiveTintColor: "gray",

        tabBarLabel: () => {
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
