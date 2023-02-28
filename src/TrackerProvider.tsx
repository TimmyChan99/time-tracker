import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useContext, createContext, useState, useEffect } from 'react';
import uuid from 'react-uuid';
import db from './firebase';

type TrackerContextType = {
  updateTracker: (key: string, value: string | number, id: string) => void;
  addTracker: () => void;
  trackerList: Tracker[];
  addTrackerToFirebase: (NewTracker: Tracker) => void;
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
  addTrackerToFirebase: () => {},
});

export const useTracker = () => useContext(TrackerContext);

function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [trackerList, setTrackerList] = useState<Tracker[]>([]);

  // Get the tracker list from firebase
  useEffect(() => {
    const getTrackerList = async () => {
      const trackersRef = collection(db, 'trackers');
      const trackersSnapshot = await getDocs(trackersRef);
      const trackers = trackersSnapshot.docs.map((snap) => snap.data());
      setTrackerList([...trackers] as Tracker[]);
    };
    getTrackerList();
  }, []);

  // add tracker to tracker list if tracker is not empty
  const addTracker = () => {
    const NewTracker = trackerInitialValue;
    setTrackerList((prevTrackerList) => [
      ...prevTrackerList,
      { ...NewTracker, id: uuid() },
    ]);
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

  // Store the tracker in firebase if it is not empty
  const addTrackerToFirebase = async (NewTracker: Tracker) => {
    if (
      NewTracker.id === '' ||
      NewTracker.date === '' ||
      NewTracker.startTime === '' ||
      NewTracker.endTime === ''
    )
      return;
    const trackersRef = doc(db, 'trackers', NewTracker.id);
    await setDoc(trackersRef, NewTracker);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    updateTracker,
    addTracker,
    trackerList,
    addTrackerToFirebase,
  };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
}

export default TrackerProvider;
export type { Tracker };
