import React, { useContext, createContext, useState, useMemo } from 'react';

type TrackerContextType = {
  tracker: Tracker; // should be array of Trackers
  updateTracker: (key: string, value: string) => void;
};

type Tracker = {
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  day: string;
};

const trackerInitialValue = {
  date: '',
  startTime: '',
  endTime: '',
  totalHours: 0,
  day: '',
};

const TrackerContext = createContext<TrackerContextType>({
  tracker: trackerInitialValue,
  updateTracker: () => {},
});

export const useTracker = () => useContext(TrackerContext);

function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [tracker, setTracker] = useState<Tracker>(trackerInitialValue);

  const updateTracker = (key: string, value: string) => {
    setTracker((prevTracker) => ({ ...prevTracker, [key]: value }));
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { tracker, updateTracker };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
}

export default TrackerProvider;
