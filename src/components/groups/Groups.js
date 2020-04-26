import React, { useState, useEffect } from 'react';

import useGroupContext from '../../hooks/useGroupContext';

const Groups = (props) => {
  const [clicked, setClicked] = useState(false);
  const [groupRows, setGroupRows] = useState([]);
  const { currentGroup, setCurrentGroup } = useGroupContext();
  const [theCurrentGroup, setTheCurrentGroup] = useState('Группа');  

  useEffect(() => {
    const getGroups = async () => {
      const response = await fetch('/api/classTimetable/groups');
      const data = await response.json();
      const distinctGroups = [...new Set(data.map(group => group.group ))];
      const copy = [...distinctGroups];
      setCurrentGroup(copy[0]);
      setTheCurrentGroup(copy[0])
      renderGroups(copy);
    }
    getGroups();
  }, []);

  useEffect(() => {
    setCurrentGroup(theCurrentGroup)
  }, [theCurrentGroup]);

  const handleSetCurrentGroup = (myGroup) => {
    setTheCurrentGroup(myGroup);
  }

  const renderGroups = (copy) => {
    const rows = copy.map((theGroup, i) => (
      <li className="header-tooltip__group__item" onClick={() => handleSetCurrentGroup(theGroup)} id={i} key={i}>{theGroup}</li>
      )
    );

    setGroupRows(rows);
  };

  const showMenu = () => {
    setClicked(prev => !prev);
  }

  const closeMenu = () => {
    setClicked(false);
  }

  return (
    <div
      className={`header-tooltip-group-wrapper select-wrapper ${clicked ? '--clicked' : ''}`}
      onClick={() => showMenu()}
      tabIndex="0"
      onBlur={ closeMenu }
    >
    <label className="header-tooltip-group__label --ul-label --current">{theCurrentGroup}</label>
    <ul className={`header-tooltip-group ${clicked ? '--shown' : ''}`}>
      {
        groupRows
      }
    </ul>
    </div>
  );
};

export default Groups;