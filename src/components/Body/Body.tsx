
import React from 'react';
import { Container } from 'native-base';
import { ViewStyle } from 'react-native';

const style: ViewStyle = {
    padding: 5
}

const Body: React.FC = (props) => {
    return (
        <Container style={style}>
            {props.children}
        </Container>
    );
}

export default Body;
