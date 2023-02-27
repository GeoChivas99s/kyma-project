import Welcome from "../welcome/Welcome";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Teste } from "../teste/teste";
import { Teste1 } from "../teste1/teste";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
    screenOptions={ ({route})=>({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

      }
      
    })}
    >
      <Tab.Screen name="Teste" component={Teste} />
      <Tab.Screen name="Teste1" component={Teste1} />
    </Tab.Navigator>
  );
}
