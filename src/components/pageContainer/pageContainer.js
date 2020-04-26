import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

import Header from '../header/header';
import Sidebar from '../sidebar/Sidebar';
import TimetablesPage from '../../pages/TimetablesPages/TimetablesPage';
import CallsPage from '../../pages/CallsPage/CallsPage';
import EntryPage from '../../pages/EntryPage/EntryPage';

const PageContainer = (props) => {
  const [pages] = useState([
    {
      component: EntryPage,
      title: 'Расписание колледжа',
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

  const [title, setTitle] = useState('Расписание уроков');

  const location = useLocation();
  useEffect(
    () => {
      let title;
      pages.forEach(page => page.path === location.pathname ? title = page.title : false);
      setTitle(title);
    },
    [location]
  );


  return (
    <div className="wrapper">
      <Header title={title}/> 
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
  );
};

export default PageContainer;