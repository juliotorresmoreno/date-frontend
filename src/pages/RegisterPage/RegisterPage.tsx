
import {
    Button, Container, Content, Footer,
    FooterTab, Form, Input, InputGroup,
    Label, Text
} from 'native-base';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-native';
import { setSession } from '../../actions/auth';
import AppHeader from '../../components/AppHeader';
import authService from '../../services/auth';
import store from '../../store';
import RegisterPageL18N from './RegisterPage.l18n';

interface RegisterPageProps extends RouteComponentProps {

}

interface RegisterPageBaseProps extends RegisterPageProps {

}

const RegisterPageBase: React.FC<RegisterPageBaseProps> = ({ history }) => {
    const [firstname, setFirstname] = useState('julio');
    const [lastname, setLastname] = useState('torres');
    const [phone, setPhone] = useState('3013819315');
    const [email, setEmail] = useState('jtorres990@gmail.com');
    const [password, setPassword] = useState('12345678');
    const onSubmit = async () => {
        try {
            await authService.register(firstname, lastname, phone, email, password);
            const session = await authService.login(email, password);
            store.dispatch(setSession(session));
            history.push('/');
        } catch (error) {
            console.trace((error as Error).message);
        }
    }
    return (
        <Container>
            <AppHeader />
            <Content style={{ margin: 10 }}>
                <Form>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{RegisterPageL18N.firstnameLabel}</Text>
                        </Label>
                        <Input value={firstname} onChangeText={setFirstname} />
                    </InputGroup>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{RegisterPageL18N.lastnameLabel}</Text>
                        </Label>
                        <Input value={lastname} onChangeText={setLastname} />
                    </InputGroup>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{RegisterPageL18N.phoneLabel}</Text>
                        </Label>
                        <Input value={phone} onChangeText={setPhone} />
                    </InputGroup>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{RegisterPageL18N.emailLabel}</Text>
                        </Label>
                        <Input value={email} onChangeText={setEmail} />
                    </InputGroup>
                    <InputGroup>
                        <Label style={{ width: 90, fontWeight: 'bold' }}>
                            <Text>{RegisterPageL18N.passwordLabel}</Text>
                        </Label>
                        <Input value={password} onChangeText={setPassword} />
                    </InputGroup>
                    <Button style={{ marginTop: 20 }} onPress={onSubmit}>
                        <Text>{RegisterPageL18N.submitButton}</Text>
                    </Button>
                </Form>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full onPress={() => history.go(-1)}>
                        <Text>{RegisterPageL18N.loginButton}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

const RegisterPage = withRouter<
    RegisterPageBaseProps,
    React.ComponentType<RegisterPageBaseProps>
>(RegisterPageBase);

export default RegisterPage;
