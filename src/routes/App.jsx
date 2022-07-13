import React from 'react';
import { Header } from "@containers/Header";
import { Hero } from "@containers/Hero";
import { Card } from "@containers/Card";
import { ResultList } from '@containers/ResultList';
import { NotFound } from "@containers/NotFound";
import { Description } from "@containers/Description";

import { Router } from '@reach/router';
import "@styles/global.css";
import "../styles/main.scss";


export const App = () => {
    return (
      <>
        <Header default />
        <Hero path='/hero' />
        <Router>
          <ResultList path='/' />
        </Router>
      </>
    );
}