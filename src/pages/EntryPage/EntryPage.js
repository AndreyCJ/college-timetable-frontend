import React, { useState, useEffect } from 'react';
import useGroupContext from '../../hooks/useGroupContext';
import useAllGroupsContext from '../../hooks/useAllGroupsContext';

import './EntryPage.css';

const EntryPage = () => {
  const { setCurrentGroup } = useGroupContext();
  const { groups } = useAllGroupsContext();
  const [ selectedGroup, setSelectedGroup ] = useState('');
  const [ errorMessageClass, setErrorMessageClass ] = useState('');
  const [ submitDisabled, setSubmitDisabled ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGroup === '') {
      setErrorMessageClass('show')
      setSubmitDisabled(true);
      setTimeout(() => {
        setErrorMessageClass('');
        setSubmitDisabled(false);
      }, 2900);
    } else {
      setCurrentGroup(selectedGroup);
      localStorage.setItem('currentGroup', selectedGroup);
      console.log(selectedGroup);
      window.location.pathname = '/class-timetable';
    }
  };

  const handeCurrentGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  }

  useEffect(() => {
    console.log(groups)
  }, [groups])

  return (
    <div className="entryPage-wrapper">
      <form>
        <div className="entryPage-groups-wrapper">
          {
            groups !== 'Группы' && groups.map((group, i) => (
              <div key={i - 500}>
                <input key={i} checked={selectedGroup === group} onChange={handeCurrentGroupChange} value={group} type="radio" name="Group" /> <label key={i+200}>{group}</label>
              </div>
            ))
          }
        </div>
        <button className="submit-btn" disabled={submitDisabled} type="submit" onClick={(e) => handleSubmit(e)}>Выбрать</button>
      </form>
      {<div className={`snackbar ${errorMessageClass}`}>Выберите группу</div>}
    </div>
  );
};

export default EntryPage;