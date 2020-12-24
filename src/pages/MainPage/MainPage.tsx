
import React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-native';
import ChatsPage from '../ChatsPage';

interface MainPageProps extends RouteComponentProps {

}

interface MainPageBaseProps extends MainPageProps {

}

const MainPageBase: React.FC<MainPageBaseProps> = () => {
    return <Redirect to="/people" />;
};

const MainPage = withRouter<MainPageBaseProps, React.ComponentType<MainPageBaseProps>>(
    MainPageBase
);

export default MainPage;
