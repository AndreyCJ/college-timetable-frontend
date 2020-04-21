import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Header from '../header/header';
import Sidebar from '../sidebar/Sidebar';
import TimetablesPage from '../../pages/TimetablesPages/TimetablesPage';
import CallsPage from '../../pages/CallsPage/CallsPage';
import EntryPage from '../../pages/EntryPage/EntryPage';

import { ToolbarProvider } from '../../context/ToolbarContext';

import './app.css';

const App = (props) => {
  const [pages] = useState([
    {
      component: EntryPage,
      title: 'Расписание',
      path: '/'
    },
    {
      component: TimetablesPage,
      title: 'Расписание уроков',
      path: '/class-timetable'
    },
    {
      component: CallsPage,
      title: 'Расписание звоноков',
      path: '/calls'
    }
  ]);

  return (
      <Router>
        <ToolbarProvider>
        <div className="wrapper">
          <Header /> 
          <div className="main-content-wrapper">
            <Sidebar />
            <div className="main">

              {
                pages.map(( { component: C, path }, i ) => {
                  return <Route
                    exact
                    key={i}
                    path={path}
                    render={(props) => <C {...props} />}
                  />
                })
              }
            </div>
          </div>
        </div>
        </ToolbarProvider>
      </Router>
  );
};

export default App;