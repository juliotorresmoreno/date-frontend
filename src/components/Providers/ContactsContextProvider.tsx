import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import * as Contacts from 'react-native-contacts';
import ContactsContext from '../../contexts/contactsContext';

const ContactsContextProvider: React.FC = ({ children }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [contacts, setContatcs] = useState([]);
    useEffect(function () {
        if (isLoad) return;
        setIsLoad(true);
        (async function () {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            );
            if (granted === 'granted') {
                const contacts = await Contacts.getAll();
                setContatcs(contacts);
            }
        })();
    });
    return (
        <ContactsContext.Provider value={contacts}>
            {children}
        </ContactsContext.Provider>
    );
}

export default ContactsContextProvider;
