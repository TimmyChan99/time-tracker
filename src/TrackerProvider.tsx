import React, { useContext, createContext, useState } from 'react';
import uuid from 'react-uuid';

type TrackerContextType = {
  updateTracker: (key: string, value: string | number, id: string) => void;
  addTracker: () => void;
  trackerList: Tracker[];
};

type Tracker = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  day: string;
};

const trackerInitialValue = {
  id: '',
  date: '',
  startTime: '',
  endTime: '',
  totalHours: 0,
  day: '',
};

const TrackerContext = createContext<TrackerContextType>({
  updateTracker: () => {},
  trackerList: [],
  addTracker: () => {},
});

export const useTracker = () => useContext(TrackerContext);

function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [trackerList, setTrackerList] = useState<Tracker[]>([]);

  // add tracker to tracker list if tracker is not empty
  const addTracker = () => {
    const NewTracker = trackerInitialValue;
    setTrackerList((prevTrackerList) => [
      ...prevTrackerList,
      { ...NewTracker, id: uuid() },
    ]);
    // add to firebase
    // if (  <== check if tracker is empty for firebase
    //   NewTracker.date === '' ||
    //   NewTracker.startTime === '' ||
    //   NewTracker.endTime === ''
    // )
    //   return;
  };

  const updateTracker = (key: string, value: string | number, id: string) => {
    setTrackerList((prevTrackerList) => {
      const updatedTrackerList = prevTrackerList.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value };
        }
        return item;
      });
      return updatedTrackerList;
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { updateTracker, addTracker, trackerList };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
}

export default TrackerProvider;
export type { Tracker };
