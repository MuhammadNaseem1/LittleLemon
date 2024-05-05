import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../Chat';
import { Linking,Platform } from 'react-native';
import DeepLinking from '../../DeepLinking';
const Stack = createStackNavigator();

export function MyStack({navigation}) {
  useEffect(() => {
    // Deep linking event listener
    const handleDeepLink = ({ url }) => {
      const { path } = Linking.parse(url);

      // Navigate based on the path
      if (path === 'Chat') {
        navigation?.navigate('Chat');
      }
    };

    // Add event listener for deep linking
    Linking.addEventListener('url', handleDeepLink);

    // Check for initial deep link when the app is launched
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    // Clean up the event listener
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []); // Only run this effect once on component mount

  const linking = {
    prefixes: ['Littlelemon://'], // Your app's URL scheme
    config: {
      screens: {
        Chat: 'Chat',
        // Other screens as needed
      },
    },
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="DeepLinking" component={DeepLinking} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}