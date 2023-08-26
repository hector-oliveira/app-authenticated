import { 
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold
} from '@expo-google-fonts/noto-sans';

import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import theme from '@themes/theme';
import { Routes } from '@routes/route';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary[800]}
      />
    </ThemeProvider>
  );
}