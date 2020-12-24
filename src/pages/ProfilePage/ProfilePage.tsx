
import React from 'react';
import { Container, Footer } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Profile from '../../components/Profile';

interface ProfilePageProps extends RouteComponentProps {

}

interface ProfilePageBaseProps extends ProfilePageProps {

}

const ProfilePageBase: React.FC<ProfilePageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />

            <Body>
                <Profile />
            </Body>
        </Container>
    )
}

const ProfilePage = withRouter<ProfilePageProps, React.ComponentType<ProfilePageProps>>(ProfilePageBase);

export default ProfilePage;
