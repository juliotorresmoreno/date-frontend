
import React from 'react';
import { Container, Footer } from 'native-base';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppHeader from '../../components/AppHeader';
import Body from '../../components/Body';
import Billing from '../../components/Billing';

interface BillingPageProps extends RouteComponentProps {

}

interface BillingPageBaseProps extends BillingPageProps {

}

const BillingPageBase: React.FC<BillingPageBaseProps> = () => {
    return (
        <Container>
            <AppHeader />

            <Body>
                <Billing />
            </Body>
        </Container>
    )
}

const BillingPage = withRouter<BillingPageProps, React.ComponentType<BillingPageProps>>(BillingPageBase);

export default BillingPage;
