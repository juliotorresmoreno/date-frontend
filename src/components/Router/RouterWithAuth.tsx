
import React from 'react';
import { Switch, Route } from 'react-router-native';
import MainPage from '../../pages/MainPage';
import ChatsPage from '../../pages/ChatsPage';
import AppDrawerContextProvider from '../Providers/AppDrawerContextProvider';
import ProfilePage from '../../pages/ProfilePage';
import PeoplePage from '../../pages/PeoplePage';
import VisitsPage from '../../pages/VisitsPage/VisitsPage';
import BillingPage from '../../pages/BillingPage';
import ContactsContextProvider from '../Providers/ContactsContextProvider';
import ContactsPage from '../../pages/ContactsPage';
import PublishPage from '../../pages/PublishPage/PublishPage';
import GaleryPage from '../../pages/GaleryPage/GaleryPage';

const RouterWithAuth: React.FC = () => {
    return (
        <AppDrawerContextProvider>
            <ContactsContextProvider>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/chats' component={ChatsPage} />
                    <Route exact path='/people' component={PeoplePage} />
                    <Route exact path='/visits' component={VisitsPage} />
                    <Route exact path='/profile' component={ProfilePage} />
                    <Route exact path='/billing' component={BillingPage} />
                    <Route exact path='/contacts' component={ContactsPage} />
                    <Route exact path='/publish' component={PublishPage} />
                    <Route exact path='/galery' component={GaleryPage} />
                </Switch>
            </ContactsContextProvider>
        </AppDrawerContextProvider>
    );
}

export default RouterWithAuth;
