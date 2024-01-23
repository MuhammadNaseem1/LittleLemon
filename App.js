import { View,SafeAreaView,StatusBar } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import { useState } from 'react';
import LittleLemonFooter from './components/LittleLemonFooter';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
export default function App() {
  const [hidden, setHidden] = useState(false);
  const STYLES = ['default', 'dark-content', 'light-content'];
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
        <StatusBar
        animated={true}
        backgroundColor="#F4CE14"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <LittleLemonHeader />
      <MenuItems />
      <View>
        <LittleLemonFooter/>
      </View>
    </SafeAreaView>
  );
}