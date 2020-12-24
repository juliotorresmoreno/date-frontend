import { defaultLang, fallbackLang } from '../../l18n';
import registerPageES_CO from './RegisterPage.es-CO';

const langs = {
    'es-CO': registerPageES_CO
};

const RegisterPageL18N = langs[defaultLang] || langs[fallbackLang];

export default RegisterPageL18N;
