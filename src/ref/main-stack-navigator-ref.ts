import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";
import { MainStackNavigatorProps } from "../routes/type";


const MainStackNavigatorRef = createRef<NavigationContainerRef<MainStackNavigatorProps>>()


export { MainStackNavigatorRef }