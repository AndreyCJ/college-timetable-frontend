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
  const [isGroupSelected, setSelected] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('currentGroup') !== null) {
      setSelected(true);
      if (window.location.pathname === '/') {
        window.location.pathname = '/class-timetable';
      }
    } else if(localStorage.getItem('currentGroup') === null) {
      if (window.location.pathname !== '/') {
        window.location.pathname = '/';
      }
    }
  }, [])

  const location = useLocation();
  useEffect(
    () => {
      let title;
      pages.forEach(page => page.path === location.pathname ? title = page.title : false);
      setTitle(title);
    },
    [location]
  );

  const renderAllPages = () => {
    return pages.map(( { component: C, path }, i ) => {
        return <Route
        exact
        key={i}
        path={path}
        render={(props) => <C {...props} />
        }
      />
    });
  };

  const renderWithoutEntryPage = () => {
    return pages.filter(({path}) => {
      if (path === '/') return false;
      return true;
    })
    .map(( { component: C, path }, i ) => {
        return <Route
        exact
        key={i}
        path={path}
        render={(props) => <C {...props} />
        }
      />
    })
  }

  return (
    <div className="wrapper">
      <Header title={title}/> 
      <div className="main-content-wrapper">
        <Sidebar />
        <div className="main">

          {
            isGroupSelected ? renderWithoutEntryPage() : renderAllPages()
          }
        </div>
      </div>
    </div>
  );
};

export default PageContainer;