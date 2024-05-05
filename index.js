import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Chat from './components/Chat';
import {name as appName} from './app.json';
import DeepLinking from './DeepLinking';
import { MyStack } from './components/Navigations/StackNavigations';

AppRegistry.registerComponent(appName, () => MyStack );
