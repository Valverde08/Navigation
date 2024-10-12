import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../Pages/List/index'
import User from '../Pages/Users/index'
import TabCustom from '../Components/Tabs/index'

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false,
      
    }}
    tabBar={props=><TabCustom {...props}/>}

    >
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}