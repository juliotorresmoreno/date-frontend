
import { Container, Footer } from 'native-base';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Contacts from '../../components/Contacts';

interface ContactsPageProps extends RouteComponentProps {

}

interface ContactsPageBaseProps extends ContactsPageProps {

}

const ContactsPageBase: React.FC<ContactsPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />
            <Body>
                <Contacts />
            </Body>
            <Footer>
                <AppMenu />
            </Footer>
        </Container>
    )
}

const ContactsPage = withRouter<ContactsPageProps, React.ComponentType<ContactsPageProps>>(ContactsPageBase);

export default ContactsPage;
