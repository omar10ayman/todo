import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavi from './pages/StackNavi';
import DonePages from './pages/DonePages';
import { Provider } from 'react-redux';
import store from './store';
import UnDonePages from './pages/UnDonePages';
const Tab= createBottomTabNavigator()
export default function App() {

  return (
  <Provider store={store}>
     <NavigationContainer>
    <Tab.Navigator initialRouteName='main'  >
      <Tab.Screen options={{
      headerBackButtonMenuEnabled: true,
      title:"ToDo App",
      headerTitleAlign: 'center',
      headerTitleStyle:{
        fontSize:25
      }
      }}  name='main' component={StackNavi}/>
      <Tab.Screen options={{
      headerBackButtonMenuEnabled: true,
      title:"Done Tasks",
      headerTitleAlign: 'center',
      headerTitleStyle:{
        fontSize:25
      }
      }}   name='done' component={DonePages}/>
      <Tab.Screen options={{
      headerBackButtonMenuEnabled: true,
      title:"Undone Tasks",
      headerTitleAlign: 'center',
      headerTitleStyle:{
        fontSize:25
      }
      }} 
       name='undone' component={UnDonePages}/>
    </Tab.Navigator>
   </NavigationContainer>  
  </Provider>  
  );
}


