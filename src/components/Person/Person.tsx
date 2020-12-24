import React from 'react';
import { Container } from 'native-base';
import { Image } from 'react-native';

const sourceSrc = "https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg?q=1";

const Post = () => {
    return (
        <Container>
            <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: sourceSrc }} />
        </Container>
    );
}

export default Post;
