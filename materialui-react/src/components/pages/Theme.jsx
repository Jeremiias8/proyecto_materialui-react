import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
    },
};

export default function Theme() {
    
    return (
        <NavigationContainer theme={MyTheme}>{/* content */}
        </NavigationContainer>
    );

}