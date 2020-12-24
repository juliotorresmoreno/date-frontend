
import { CSSProperties } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const AppMenuStyles = {
    button: {
        width: 100,
        height: 100,
        margin: 5
    } as ViewStyle,
    buttonText: {
        textAlign: 'center'
    } as StyleProp<TextStyle>,
    container: {
        flexDirection: "row"
    } as ViewStyle
};
