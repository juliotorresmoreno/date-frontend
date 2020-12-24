
import React from 'react';
import { Container, Footer } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import People from '../../components/People';

interface PeoplePageProps extends RouteComponentProps {

}

interface PeoplePageBaseProps extends PeoplePageProps {

}

const PeoplePageBase: React.FC<PeoplePageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />

            <Container>
                <People />
            </Container>

            <Footer>
                <AppMenu />
            </Footer>
        </Container>
    )
}

const PeoplePage = withRouter<PeoplePageProps, React.ComponentType<PeoplePageProps>>(PeoplePageBase);

export default PeoplePage;
