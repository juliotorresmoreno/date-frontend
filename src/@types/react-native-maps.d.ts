
import { MapViewProps as MapViewPropsInternal } from 'react-native-maps';

declare module "react-native-maps" {
    interface MapViewProps extends MapViewPropsInternal {
        style: StyleSheet
    }
}