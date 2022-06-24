import React from 'react';
import { Header } from "@containers/Header";
import { Hero } from "@containers/Hero";
import { ResultList } from "@containers/ResultListOffers";
import { NotFound } from "@containers/NotFound";

import { Router } from '@reach/router';
import "@styles/global.css";
import "../styles/main.scss";


export const App = () => {
    return (
      <>
        <Header default />
        <Hero path='/hero' />
        <Router>
          <ResultList path='/resultList' />
        </Router>
      </>
    );
}