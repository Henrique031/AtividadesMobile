import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tab from '../componentes/Tab'

export default props => (
    <SafeAreaView>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
)