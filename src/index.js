import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const locale = navigator.language.startsWith('es') ? 'es-ES' : 'en-US';
const messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;


ReactDOM.render(
        <IntlProvider locale={locale} messages= {messages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root"));