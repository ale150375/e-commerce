import React from 'react';
import { Header } from "@containers/Header";
import { NotFound } from "@containers/NotFound";

import { Router } from '@reach/router';
import "@styles/global.css";
import "../styles/components/Header.scss";


export const App = () => {
    return (
        <Router>
                <Header path='/header' />
                <NotFound default />
        </Router>
);
}