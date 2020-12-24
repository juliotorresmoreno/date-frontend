
import React from "react";
import MapView, {
    Marker, PROVIDER_GOOGLE,
    PROVIDER_DEFAULT, LatLng,
    Region
} from 'react-native-maps';
import { Button, Text, Label, View } from "native-base";
import { GOOGLE_API_KEY } from "../../config";

interface Location {
    results: { address_components: any[] }[]
}

interface Geocoder {
    init(apiKey: string, options: Object): void;
    isInit(): boolean;
    setApiKey(API_KEY: string): void;
    from(...params: any[]): Promise<Location>;
    getFromLocation(address: string): Promise<any>;
    getFromLatLng(lat: number, lng: number): Promise<any>;
}

const geocoder: Geocoder = require('react-native-geocoding').default;
geocoder.init(GOOGLE_API_KEY, {});

const providers = {
    PROVIDER_GOOGLE,
    PROVIDER_DEFAULT
};

interface InputMapProps {
    onCoordinateChangue?: (evt: LatLng) => void;
    initialRegion: Region;
    coordinate: LatLng | null;
    provider?: 'PROVIDER_GOOGLE' | 'PROVIDER_DEFAULT';
    label: string;
    onOpen: (isOpen: boolean) => void;
    isOpen: boolean
}

const InputMap: React.FC<InputMapProps> = (props) => {
    const { isOpen } = props;
    const onOpen = () => {
        props.onOpen(true);
    }
    if (!isOpen) {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Label style={{ width: 100 }}><Text>{props.label}</Text></Label>
                <Button style={{ flex: 1 }} onPress={onOpen}>
                    <Text>A</Text>
                </Button>
            </View>
        );
    }
    const onCoordinateChangue = (evt: any) => {
        const latLng: LatLng = evt.nativeEvent.coordinate;
        props.onCoordinateChangue(latLng);
        geocoder.from(latLng.latitude, latLng.longitude)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent);
            })
            .catch(error => console.warn(error));
        setTimeout(() => props.onOpen(false), 300);
    };
    return (
        <View
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                marginBottom: 10
            }}
        >
            <MapView
                provider={providers[props.provider]}
                onPress={onCoordinateChangue}
                initialRegion={props.initialRegion}
                style={{
                    width: "100%",
                    height: "100%",
                } as any}>
                <Marker coordinate={props.coordinate} />
            </MapView>
        </View>
    );
}

InputMap.defaultProps = {
    onCoordinateChangue: () => undefined,
    provider: 'PROVIDER_DEFAULT'
}

export default InputMap;
