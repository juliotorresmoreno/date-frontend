
import React from 'react';
import { Container, Footer } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Publish from '../../components/Publish';

interface PublishPageProps extends RouteComponentProps {

}

interface PublishPageBaseProps extends PublishPageProps {

}

const PublishPageBase: React.FC<PublishPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />

            <Body>
                <Publish />
            </Body>

            <Footer>
                <AppMenu />
            </Footer>
        </Container>
    )
}

const PublishPage = withRouter<PublishPageProps, React.ComponentType<PublishPageProps>>(PublishPageBase);

export default PublishPage;
