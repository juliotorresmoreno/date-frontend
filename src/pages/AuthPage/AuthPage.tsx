
import React, { useState } from 'react';
import {
    Button, Container, Content, Footer,
    FooterTab, Form, InputGroup, Text,
    Input, Label
} from 'native-base';
import store from '../../store';
import { setSession } from '../../actions/auth';
import { RouteComponentProps, withRouter } from 'react-router-native';
import AppHeader from '../../components/AppHeader';
import AuthPageL18N from './AuthPage.l18n';
import authService from '../../services/auth';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

interface AuthPageProps extends RouteComponentProps {

}

interface AuthPageBaseProps extends AuthPageProps {
    setSession: typeof setSession
}

const AuthPageBase: React.FC<AuthPageBaseProps> = ({ history, setSession }) => {
    const [userName, setUserName] = useState('jtorres990@gmail.com');
    const [password, setPassword] = useState('12345678');
    const onSubmit = async () => {
        try {
            const session = await authService.login(userName, password);
            setSession(session);
            history.push('/people');
        } catch (error) {
            console.trace((error as Error).message);
        }
    };
    return (
        <Container>
            <AppHeader />
            <Content style={{ margin: 10 }}>
                <Form>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{AuthPageL18N.usernameLabel}</Text>
                        </Label>
                        <Input
                            value={userName} onChangeText={setUserName} />
                    </InputGroup>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{AuthPageL18N.passwordLabel}</Text>
                        </Label>
                        <Input
                            secureTextEntry value={password}
                            onChangeText={setPassword} />
                    </InputGroup>
                    <Button style={{ marginTop: 20 }} onPress={onSubmit}>
                        <Text>{AuthPageL18N.submitButton}</Text>
                    </Button>
                </Form>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full onPress={() => history.push('/sign-up')}>
                        <Text>{AuthPageL18N.registerButton}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

const mapProps = () => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    setSession: ((args) => dispatch(setSession(args))) as typeof setSession
});

const AuthPage = withRouter<
    AuthPageBaseProps,
    React.ComponentType<AuthPageBaseProps>
>(connect(mapProps, mapDispatchToProps)(AuthPageBase));

export default AuthPage;
