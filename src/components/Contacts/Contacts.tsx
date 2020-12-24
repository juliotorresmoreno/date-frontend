
import { Text } from 'native-base';
import React, { useContext } from 'react';
import ContactsContext from '../../contexts/contactsContext';

const Contacts = () => {
    const contactsContext = useContext(ContactsContext);
    return (
        <>{contactsContext.map((contact, index) => {
            return (
                <Text key={index}>{contact.givenName} {contact.familyName} {contact.middleName}</Text>
            );
        })}</>
    )
}

export default Contacts;
