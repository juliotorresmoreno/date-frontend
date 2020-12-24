
import React from 'react';
import { Button, FooterTab, Text } from 'native-base';
import { withRouter, RouteComponentProps } from 'react-router-native';
import { COLORS } from '../../config';

interface AppMenuProps extends RouteComponentProps {

}

interface AppMenuBaseProps extends AppMenuProps {

}

const AppMenuBase: React.FC<AppMenuBaseProps> = ({ history, location }) => {
    return (
        <FooterTab style={{ backgroundColor: COLORS[1] }}>
            <Button
                onPress={() => history.push('/people')}
                active={location.pathname === '/people'}>
                <Text>Gente</Text>
            </Button>
            <Button
                onPress={() => history.push('/publish')}
                active={location.pathname === '/publish'}>
                <Text>Publicar</Text>
            </Button>
            <Button
                onPress={() => history.push('/chats')}
                active={location.pathname === '/chats'}>
                <Text>Chats</Text>
            </Button>
            {/*<Button
                onPress={() => history.push('/contacts')}
                active={location.pathname === '/contacts'}>
                <Text>Contactos</Text>
            </Button>*/}
            <Button
                onPress={() => history.push('/visits')}
                active={location.pathname === '/visits'}>
                <Text>Visitas</Text>
            </Button>
        </FooterTab>
    );
}

const AppMenu = withRouter<AppMenuProps, React.ComponentType<AppMenuProps>>(AppMenuBase);

export default AppMenu;
