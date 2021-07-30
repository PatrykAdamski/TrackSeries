import React from 'react';
import {
    HashRouter,
    Route,
  } from 'react-router-dom';
import Home from './Home';
import TopSeries from './TopSeries';

export default function AppContent(){
    return(
        <>
        <HashRouter>
            <Route exact path='/' component={Home} />
            <Route path='/TopSeries' component={TopSeries}/>
        </HashRouter>
        </>
    )
}