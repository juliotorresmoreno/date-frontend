
import { createContext } from "react";
import { Contact } from 'react-native-contacts';

type ContactsContext = Contact[];

const ContactsContext = createContext<ContactsContext>([]);

export default ContactsContext;