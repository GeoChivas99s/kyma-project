import Welcome from "../welcome/Welcome";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Main } from "./main";
import Reader from "../reader/reader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TextGenerator from "../textGenerator/textGenerator";
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reader"
        component={Reader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TextGenerator"
        component={TextGenerator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
