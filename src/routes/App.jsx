import React from 'react';
import { Header } from "@containers/Header";
import { Hero } from "@containers/Hero";
import { NotFound } from "@containers/NotFound";


import { Router } from '@reach/router';
import "@styles/global.css";
import "../styles/main.scss";


export const App = () => {
    return (
        <>

                <Header default />

                <Router>
                        <Hero path='/hero' />
                      
                </Router>
        </>
);
}