
import React, { ComponentType, useContext, useState } from 'react';
import {
    Header as HeaderNB,
    Left, Body, Right, Button,
    Icon, Title
} from 'native-base';
import { withRouter, RouteComponentProps } from 'react-router-native';
import AppDrawerContext from '../../contexts/appDrawerContext';
import { APP_NAME, COLORS } from '../../config';


interface HeaderProps extends RouteComponentProps {

}

interface HeaderBaseProps extends HeaderProps {

}

const homePaths = ['/', '/chats', '/people', '/visits', '/contacts', '/publish'];

const HeaderBase: React.FC<HeaderBaseProps> = ({ location, history }) => {
    const appDrawerContext = useContext(AppDrawerContext);
    return (
        <>
            <HeaderNB style={{ backgroundColor: COLORS[1] }}>
                {!homePaths.includes(location.pathname) && (
                    <Left key='0'>
                        <Button transparent onPress={() => history.go(-1)}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                )}
                <Body>
                    <Title>{APP_NAME}</Title>
                </Body>
                <Right>
                    <Button onPress={() => appDrawerContext.openDrawer()} transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </HeaderNB>
        </>
    );
}

const Header = withRouter<HeaderProps, ComponentType<HeaderProps>>(HeaderBase);

export default Header;
