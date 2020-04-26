import React, { useState } from "react";

const WeekContext = React.createContext();

const WeekProvider = ({ children }) => {
  const [state, setState] = useState({
    week: 'Четная'
  });

  // useEffect(() => {
  //   const getGroups = async () => {
  //     const response = await fetch('/api/classTimetable/groups');
  //     const data = await response.json();
  //     const distinctGroups = [...new Set(data.map(group => group.group ))];
  //     console.log(distinctGroups[0]); 
  //     setState({ group: distinctGroups, currentGroup: distinctGroups[0] });
  //   }
  //   getGroups();
  // }, [])
  
  return (
    <WeekContext.Provider value={[state, setState]}>
      {children}
    </WeekContext.Provider>
  );
}

export { WeekContext, WeekProvider };