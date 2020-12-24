
import React from 'react';
import { Container, Footer } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Galery from '../../components/Galery';

interface GaleryPageProps extends RouteComponentProps {

}

interface GaleryPageBaseProps extends GaleryPageProps {

}

const GaleryPageBase: React.FC<GaleryPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />

            <Body>
                <Galery />
            </Body>
        </Container>
    )
}

const GaleryPage = withRouter<GaleryPageProps, React.ComponentType<GaleryPageProps>>(GaleryPageBase);

export default GaleryPage;
