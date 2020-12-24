

import { defaultLang, fallbackLang } from '../../l18n';
import authPageES_CO from './AuthPage.es-CO';

const langs = {
    'es-CO': authPageES_CO
};

const AuthPageL18N = langs[defaultLang] || langs[fallbackLang];

export default AuthPageL18N;
