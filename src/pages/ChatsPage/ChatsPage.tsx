
import { Container, Footer } from 'native-base';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Chats from '../../components/Chats';

interface ChatsPageProps extends RouteComponentProps {

}

interface ChatsPageBaseProps extends ChatsPageProps {

}

const ChatsPageBase: React.FC<ChatsPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />
            <Body>
                <Chats />
            </Body>
            <Footer>
                <AppMenu />
            </Footer>
        </Container>
    )
}

const ChatsPage = withRouter<ChatsPageProps, React.ComponentType<ChatsPageProps>>(ChatsPageBase);

export default ChatsPage;
