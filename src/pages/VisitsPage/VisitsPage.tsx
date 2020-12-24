
import { Container, Footer } from 'native-base';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppMenu from '../../components/AppMenu';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Visits from '../../components/Visits';

interface VisitsPageProps extends RouteComponentProps {

}

interface VisitsPageBaseProps extends VisitsPageProps {

}

const VisitsPageBase: React.FC<VisitsPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />
            <Body>
                <Visits />
            </Body>
            <Footer>
                <AppMenu />
            </Footer>
        </Container>
    )
}

const VisitsPage = withRouter<VisitsPageProps, React.ComponentType<VisitsPageProps>>(VisitsPageBase);

export default VisitsPage;
